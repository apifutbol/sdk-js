import APIFutbol from '../src/index';

const SDK = new APIFutbol('token');

const competition = async (id: string) => {
  try {
    const { data: competition } = await SDK.competitions.getCompetition(id);

    console.log(competition.id)
  } catch (error) {
    console.error(error);
  }
};

competition("AAAAAAAA-BBBB-CCCC-EEEE-DDDDDDDDDDDD");