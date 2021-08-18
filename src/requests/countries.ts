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
    const response = await this.axios.post('/graphql', {
      query: `query GetCountries($limit: Int!, $offset: Int!) {
        countries(sort: ["sort", "precedence"], limit: $limit, offset: $offset) {
          id
          name
          precedence
          new
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
