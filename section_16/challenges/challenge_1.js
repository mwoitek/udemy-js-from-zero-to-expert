const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error?.description) throw new Error('Invalid coordinates');
      if (data.error?.message) throw new Error('Too many requests per second');
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch((error) => console.error(`Something went wrong: ${error.message}`));
};

whereAmI(-30.89034, -55.499795);

// Invalid coordinates
// whereAmI(-500, -55.499795);
// whereAmI(-30.89034, 999);
// whereAmI('', -55.499795);

// Too many requests per second
// whereAmI(-30.89034, -55.499795);
// whereAmI(-30.89034, -55.499795);
// whereAmI(-30.89034, -55.499795);
