import { AxiosInstance } from 'axios';
import { CompetitionsResponse, CompetitionResponse } from '../responses';

export class CompetitionsRequest {
  public axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /**
   * Get Competitions
   *
   * @returns CompetitionsResponse
   */
  async getCompetitions(): Promise<CompetitionsResponse> {
    const response = await this.axios.post('/graphql', {
      query: `query {
        competitions {
          id
          name
          new
          league
        }
      }`,
    });

    return response.data;
  }

  /**
   * Get Competition
   *
   * @param {string} id
   *
   * @returns CompetitionResponse
   */
  async getCompetition(id: string): Promise<CompetitionResponse> {
    const response = await this.axios.post('/graphql', {
      query: `query GetCompetition($id: ID!) {
        competition: competitions_by_id(id: $id) {
          id
          name
          new
          league
        }
      }`,
      variables: {
        id,
      },
    });

    return response.data;
  }
}
