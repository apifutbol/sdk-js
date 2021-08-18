import { AxiosInstance } from 'axios';
import { CountriesResponse, CountryResponse } from '../responses';

export class CountriesRequest {
  public axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /**
   * Get Countries
   *
   * @param {number} limit
   * @param {number} offset
   *
   * @returns CountriesResponse
   */
  async getCountries(limit = 10, offset = 0): Promise<CountriesResponse> {
    const response = await this.axios.get('/countries', {
      params: {
        limit,
        offset,
      },
    });

    return response.data;
  }

  /**
   * Get Country
   *
   * @param {string} id
   *
   * @returns CountryResponse
   */
  async getCountry(id: string): Promise<CountryResponse> {
    const response = await this.axios.get(`/countries/${id}`);

    return response.data;
  }
}
