import axios, { AxiosInstance } from 'axios';
import * as constants from './constants';
import { CountriesRequest } from './requests';

export default class APIFutbol {
  constants = constants;
  axios: AxiosInstance;

  constructor(token: string) {
    this.axios = axios.create({
      baseURL: this.constants.API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (token === 'token') {
      throw new Error('Replace "token" with your API Futbol Token.');
    }
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
}
