const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok) throw new Error(`Problem with geocoding (${response.status})`);
      return response.json();
    })
    .then((data) => console.log(`You are in ${data.city}, ${data.country}`))
    .catch((error) => console.error(`Something went wrong: ${error.message}`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
