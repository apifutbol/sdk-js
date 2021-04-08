import { AxiosInstance } from 'axios';
import { CompetitionResponse, CompetitionTableResponse } from '../responses';

export class CompetitionRequest {
  public axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /**
   * Get Competition
   *
   * @returns CompetitionResponse
   */
  async getCompetition(id: string): Promise<CompetitionResponse> {
    const response = await this.axios.get(`/competition/${id}`);
    return response.data;
  }

  /**
   * Get Competition Table
   *
   * @returns CompetitionTableResponse
   */
  async getCompetitonTable(id: string): Promise<CompetitionTableResponse> {
    const response = await this.axios.get(`/competition/${id}/table`);
    return response.data;
  }
}
