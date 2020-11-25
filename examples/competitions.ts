import APIFutbol from '../src/index';

const api = new APIFutbol('token');

(async () => {
    const competition = await api.competitions.getCompetition('XX8syTD');
    competition.data.competition.forEach(function (competition) {
        console.log({
            id: competition.id,
            name: competition.name,
        });
    });
})();
