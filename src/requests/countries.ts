import { AxiosInstance } from 'axios';
import { CountriesResponse, CompetitionsResponse } from '../responses';

export class CountriesRequest {
  public axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /**
   * Get Countries
   *
   * @returns CountriesResponse
   */
  async getCountries(): Promise<CountriesResponse> {
    const response = await this.axios.get('/countries');
    return response.data;
  }

  /**
   * Get Competitions
   *
   * @returns CompetitionsResponse
   */
  async getCompetitions(id: string): Promise<CompetitionsResponse> {
    const response = await this.axios.get(`/countries/${id}/competitions`);
    return response.data;
  }
}
