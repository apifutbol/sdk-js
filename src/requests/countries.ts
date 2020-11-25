import { AxiosInstance } from 'axios';

export class CountriesRequest {
	public axios: AxiosInstance;

	constructor(axios: AxiosInstance) {
		this.axios = axios;
	}

	async countries() {
		const response = await this.axios.get('/countries');
		return response.data;
	}
}
