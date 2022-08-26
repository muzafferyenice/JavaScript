import { countries } from "../data/countries.js";

const loadCountries = () => {
  let options = "";

  for (let country of countries) {
    options += `<option>${country.name.common} (${country.capital}) </option>`;
    console.log(country);
  }

  document.querySelector("#ddlCountries").innerHTML = options;
};

loadCountries();
