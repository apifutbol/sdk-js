import APIFutbol from '../src/index';

const api = new APIFutbol('token');

(async () => {
    const countryId = '';
    const competition = await api.countries.getCompetitions(countryId);
    competition.data.competitions.forEach(function (competition) {
        console.log({
            id: competition.id,
            name: competition.name,
        });
    });
})();
