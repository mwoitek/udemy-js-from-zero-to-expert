'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (countryData, className = '') {
  const countryPopulation = (Number(countryData.population) / 10 ** 6).toFixed(1);
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${countryData.flag}" />
      <div class="country__data">
        <h3 class="country__name">${countryData.name}</h3>
        <h4 class="country__region">${countryData.region}</h4>
        <p class="country__row"><b>Population:</b> ${countryPopulation} million people</p>
        <p class="country__row"><b>Language:</b> ${countryData.languages[0].name}</p>
        <p class="country__row"><b>Currency:</b> ${countryData.currencies[0].name}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

// Solution using XMLHttpRequest

const displayCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [countryData] = JSON.parse(this.responseText);
    renderCountry(countryData);
  });
};

// displayCountryData('Brazil');
// displayCountryData('Bosnia');

const displayCountryAndNeighbor = function (country) {
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request1.send();
  request1.addEventListener('load', function () {
    const [countryData] = JSON.parse(this.responseText);
    renderCountry(countryData);

    if (countryData.borders.length === 0) return;
    const neighbor = countryData.borders[0];
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener('load', function () {
      const neighborData = JSON.parse(this.responseText);
      renderCountry(neighborData, 'neighbour');
    });
  });
};

// displayCountryAndNeighbor('Brazil');
// displayCountryAndNeighbor('Norway');

// Solution using fetch

const displayCountryData2 = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

// displayCountryData2('Brazil');

const getJSON = (url, errorMessage = 'Something went wrong') =>
  fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });

const displayCountryAndNeighbor2 = function (country) {
  getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) throw new Error('No neighbor found');
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((error) => {
      console.error(error);
      renderError(`Something went wrong: ${error.message}.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', () => displayCountryAndNeighbor2('Australia'));
// btn.addEventListener('click', () => displayCountryAndNeighbor2('Italy'));
// btn.addEventListener('click', () => displayCountryAndNeighbor2('xyz'));

const getPosition = () =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );

const whereAmI = function () {
  getPosition()
    .then((position) => {
      const { latitude: lat, longitude: lng } = position.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((response) => {
      if (!response.ok) throw new Error(`Problem with geocoding (${response.status})`);
      return response.json();
    })
    .then((data) => fetch(`https://restcountries.eu/rest/v2/name/${data.country}`))
    .then((response) => {
      if (!response.ok) throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((error) => {
      console.error(error);
      renderError(`Something went wrong: ${error.message}.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI2 = async function () {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    const responseGeocode = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!responseGeocode.ok)
      throw new Error(`Problem with geocoding (${responseGeocode.status})`);
    const dataGeocode = await responseGeocode.json();

    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeocode.country}`
    );
    if (!response.ok) throw new Error(`Country not found (${response.status})`);
    const data = await response.json();

    renderCountry(data[0]);
  } catch (error) {
    console.error(error);
    renderError(`Something went wrong: ${error.message}.`);
  } finally {
    countriesContainer.style.opacity = 1;
  }
};

btn.addEventListener('click', () => whereAmI2());

const whereAmI3 = async function () {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;
    const responseGeocode = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!responseGeocode.ok)
      throw new Error(`Problem with geocoding (${responseGeocode.status})`);
    const dataGeocode = await responseGeocode.json();
    return `You are in ${dataGeocode.city}, ${dataGeocode.country}`;
  } catch (error) {
    throw error;
  }
};

// console.log('1: Will get location');
// (async function () {
//   try {
//     const location = await whereAmI3();
//     console.log(`2: ${location}`);
//   } catch (error) {
//     console.error(`2: ${error.message}`);
//   } finally {
//     console.log('3: Finished getting location');
//   }
// })();

const get3Capitals = async function (country1, country2, country3) {
  try {
    const [data1] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${country1}`,
      'Country not found'
    );
    const [data2] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${country2}`,
      'Country not found'
    );
    const [data3] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${country3}`,
      'Country not found'
    );
    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (error) {
    console.error(error);
  }
};

// get3Capitals('China', 'Finland', 'Russia');

const get3Capitals2 = async function (country1, country2, country3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${country1}`, 'Country not found'),
      getJSON(`https://restcountries.eu/rest/v2/name/${country2}`, 'Country not found'),
      getJSON(`https://restcountries.eu/rest/v2/name/${country3}`, 'Country not found'),
    ]);
    const capitals = data.map((countryData) => countryData[0].capital);
    console.log(capitals);
  } catch (error) {
    console.error(error);
  }
};

get3Capitals2('China', 'Finland', 'Russia');
