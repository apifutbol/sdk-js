import APIFutbol from '../src/index';

const SDK = new APIFutbol('token');

const countries = async () => {
  const { data } = await SDK.countries.getCountries();

  console.log(data);
};

countries();
