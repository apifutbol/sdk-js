import APIFutbol from '../src/index';

const sdk = new APIFutbol('token');

(async () => {
    const countries = await sdk.countries.getCountries();
    countries.data.country.forEach(function (country) {
        console.log({
            id: country.id,
            name: country.name,
            competitions: country.competitions,
        });
    });
})();
