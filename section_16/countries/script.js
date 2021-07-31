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
        <p class="country__row"><b>Population:</b> ${countryPopulation} people</p>
        <p class="country__row"><b>Language:</b> ${countryData.languages[0].name}</p>
        <p class="country__row"><b>Currency:</b> ${countryData.currencies[0].name}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
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

displayCountryData2('Brazil');
