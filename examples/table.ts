import APIFutbol from '../src/index';

const sdk = new APIFutbol('token');

(async () => {
    const competitionId = '';
    const competition = await sdk.competition.getCompetitonTable(competitionId);

    const teams: Array<any> = [];
    competition.data.table.forEach(function (team) {
        teams.push({
            id: team.id,
        });
    });

    console.log({
        competition: competition.data.competition,
        table: teams,
    });
})();
