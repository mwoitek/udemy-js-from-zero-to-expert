'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [countryData] = JSON.parse(this.responseText);
    const countryPopulation = (Number(countryData.population) / 10 ** 6).toFixed(1);
    const html = `
      <article class="country">
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
  });
};

getCountryData('Brazil');
getCountryData('Bosnia');
