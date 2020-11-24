import axios, { AxiosInstance } from 'axios';
import { ServerRequest } from './requests';
import * as constants from './constants';

export default class APIFutbol {
    constants = constants;
    axios: AxiosInstance;

    constructor(token: string, prod?: boolean) {
        this.axios = axios.create({
            baseURL: this.constants.API_URL['dev'],
            headers: {
                Authorization: `Basic ${token}`,
            },
        });

        if (prod) {
            this.axios.defaults.baseURL = this.constants.API_URL['prod'];
        }
    }

    get url() {
        return this.axios.defaults.baseURL!;
    }

    set url(url: string) {
        this.axios.defaults.baseURL = url;
    }

    get token() {
        return this.axios.defaults.headers?.Authorization?.split(' ')[1] || null;
    }

    set token(token: string | null) {
        this.axios.defaults.headers = {
            ...(this.axios.defaults.headers || {}),
            Authorization: token ? `Bearer ${token}` : undefined,
        };
    }

    get server() {
        return new ServerRequest(this.axios);
    }
}
