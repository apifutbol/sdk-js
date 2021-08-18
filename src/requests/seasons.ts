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
    const response = await this.axios.get('/items/seasons', {
      params: {
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
    const response = await this.axios.get(`/items/seasons/${id}`);

    return response.data;
  }
}
