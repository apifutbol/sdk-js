import { AxiosInstance } from 'axios';

export class ServerRequest {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    async ping() {
        await this.axios.get('/server/ping');
        return 'pong';
    }
}
