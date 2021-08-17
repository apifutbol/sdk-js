import { AxiosInstance } from 'axios';
import { SeasonsResponse } from '../responses';

export class SeasonsRequest {
  public axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /**
   * Get Seasons
   *
   * @returns SeasonsResponse
   */
  async getSeasons(): Promise<SeasonsResponse> {
    const response = await this.axios.post('/graphql', {
      query: `query {
        seasons {
          id
          name
					new
					year
        }
      }`,
    });

    return response.data;
  }
}
