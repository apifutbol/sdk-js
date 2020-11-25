import { AxiosInstance } from 'axios';
import { CompetitionsResponse } from '../responses';

export class CompetitionsRequest {
    public axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    /**
     * Get Competition
     *
     * @returns CompetitionsResponse
     */
    async getCompetition(id: string): Promise<CompetitionsResponse> {
        const response = await this.axios.get(`/competitions/${id}`);
        return response.data;
    }
}
