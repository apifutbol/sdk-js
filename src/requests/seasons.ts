import { AxiosInstance } from 'axios';
import { SeasonsResponse, SeasonResponse } from '../responses';

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

  /**
   * Get Season
   *
   * @param {string} id
   *
   * @returns SeasonResponse
   */
  async getSeason(id: string): Promise<SeasonResponse> {
    const response = await this.axios.post('/graphql', {
      query: `query GetSeason($id: ID!) {
        season: seasons_by_id(id: $id) {
          id
          name
          new
          year
        }
      }`,
      variables: {
        id,
      },
    });

    return response.data;
  }
}
