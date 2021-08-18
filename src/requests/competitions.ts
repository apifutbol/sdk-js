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
   * @param {number} limit
   * @param {number} offset
   *
   * @returns CompetitionsResponse
   */
  async getCompetitions(limit = 10, offset = 0): Promise<CompetitionsResponse> {
    const response = await this.axios.get('/competitions', {
      params: {
        limit,
        offset,
      },
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
    const response = await this.axios.get(`/competitions/${id}`);

    return response.data;
  }
}
