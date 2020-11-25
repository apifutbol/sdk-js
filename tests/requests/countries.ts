import { CountriesRequest } from '../../src/requests/countries';
import axios, { AxiosInstance } from 'axios';
import sinon, { SinonSandbox } from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('CountriesRequest', () => {
	let sandbox: SinonSandbox;
	let axiosInstance: AxiosInstance;
	let request: CountriesRequest;

	beforeEach(() => {
		sandbox = sinon.createSandbox();
		axiosInstance = axios.create();
		request = new CountriesRequest(axiosInstance);
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('countries', () => {
		it('calls the /countries endpoint', async () => {
			const stub = sandbox.stub(request.axios, 'get').resolves(Promise.resolve({ data: {} }));

			await request.countries();
			expect(stub).to.have.been.calledWith('/countries');
		});
	});
});
