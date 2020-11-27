import APIFutbol from '../src/index';

const api = new APIFutbol('3KgyuPMdtQFuK8EtPeNudNhb', true);

(async () => {
    const countries = await api.countries.getCountries();
    countries.data.country.forEach(function (country) {
        console.log({
            id: country.id,
            name: country.name,
            competitions: country.competitions,
        });
    });
})();
