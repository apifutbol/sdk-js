import APIFutbol from '../src/index';

const sdk = new APIFutbol('token');

(async () => {
  const competitionId = '';
  const competition = await sdk.competition.getCompetition(competitionId);
  const data = competition.data.competition;

  console.log({
    id: data.id,
    name: data.name,
    start: data.start,
    end: data.end,
    table: data.table,
    seasons: data.seasons,
  });
})();
