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
    const response = await this.axios.post('/graphql', {
      query: `query GetCompetitions($limit: Int!, $offset: Int!) {
        competitions(sort: ["sort", "precedence"], limit: $limit, offset: $offset) {
          id
          name
          precedence
          new
          league
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
   * Get Competition
   *
   * @param {string} id
   *
   * @returns CompetitionResponse
   */
  async getCompetition(id: string): Promise<CompetitionResponse> {
    const response = await this.axios.post('/graphql', {
      query: `query GetCompetition($id: ID!) {
        competition: competitions_by_id(id: $id) {
          id
          name
          new
          league
        }
      }`,
      variables: {
        id,
      },
    });

    return response.data;
  }
}
