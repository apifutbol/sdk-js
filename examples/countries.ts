import APIFutbol from '../src/index';

const SDK = new APIFutbol('token');

const countries = async () => {
  try {
    const { data } = await SDK.countries.getCountries();
    
    for (const country of data.countries) {
      console.log(country.id);
    }
  } catch (error) {
    console.error(error);
  }
};

countries();
