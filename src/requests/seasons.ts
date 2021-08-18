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
   * @param {number} limit
   * @param {number} offset
   *
   * @returns SeasonsResponse
   */
  async getSeasons(limit = 10, offset = 0): Promise<SeasonsResponse> {
    const response = await this.axios.post('/graphql', {
      query: `query GetSeasons($limit: Int!, $offset: Int!) {
        seasons(sort: ["sort", "precedence"], limit: $limit, offset: $offset) {
          id
          name
          precedence
          new
          year
        }
      }`,
      variables: {
        limit,
        offset,
      },
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
