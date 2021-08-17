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
   * @returns CountriesResponse
   */
  async getCountries(): Promise<CountriesResponse> {
    const response = await this.axios.post('/graphql', {
      query: `query {
        countries {
          id
          name
          new
        }
      }`,
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
    const response = await this.axios.post('/graphql', {
      query: `query GetCountry($id: ID!) {
        country: countries_by_id(id: $id) {
          id
          name
          new
        }
      }`,
      variables: {
        id,
      },
    });

    return response.data;
  }
}
