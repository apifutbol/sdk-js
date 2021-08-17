import { AxiosInstance } from 'axios';
import { CompetitionsResponse } from '../responses';

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
}
