import { AxiosInstance } from 'axios';
import { CountriesResponse } from '../responses';

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
}
