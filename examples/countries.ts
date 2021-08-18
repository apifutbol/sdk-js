import APIFutbol from '../src/index';

const SDK = new APIFutbol('token');

const countries = async () => {
  try {
    const { data: countries } = await SDK.countries.getCountries();

    for (const country of countries) {
      console.log(country.id);
    }
  } catch (error) {
    console.error(error);
  }
};

countries();
