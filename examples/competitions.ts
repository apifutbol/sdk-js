import APIFutbol from '../src/index';

const sdk = new APIFutbol('token');

(async () => {
  const countryId = '';
  const competition = await sdk.countries.getCompetitions(countryId);
  competition.data.competitions.forEach(function (competition) {
    console.log({
      id: competition.id,
      name: competition.name,
    });
  });
})();
