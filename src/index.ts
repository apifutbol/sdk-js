import axios, { AxiosInstance } from 'axios';
import { CountriesRequest, CompetitionRequest } from './requests';
import * as constants from './constants';

export default class APIFutbol {
    constants = constants;
    axios: AxiosInstance;

    constructor(token: string, prod?: boolean) {
        this.axios = axios.create({
            baseURL: this.constants.API_URL['dev'],
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (token === 'token') {
            throw new Error('Replace "token" with your API Futbol Token.');
        }

        if (prod) {
            this.axios.defaults.baseURL = this.constants.API_URL['prod'];
        }
    }

    get url(): string {
        return this.axios.defaults.baseURL!;
    }

    set url(url: string) {
        this.axios.defaults.baseURL = url;
    }

    get token(): string | null {
        return this.axios.defaults.headers?.Authorization?.split(' ')[1] || null;
    }

    set token(token: string | null) {
        this.axios.defaults.headers = {
            ...(this.axios.defaults.headers || {}),
            Authorization: token ? `Bearer ${token}` : undefined,
        };
    }

    get countries(): CountriesRequest {
        return new CountriesRequest(this.axios);
    }

    get competition(): CompetitionRequest {
        return new CompetitionRequest(this.axios);
    }
}
