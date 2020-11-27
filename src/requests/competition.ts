import { AxiosInstance } from 'axios';
import { CompetitionResponse } from '../responses';

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
}
