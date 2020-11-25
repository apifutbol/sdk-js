import { CompetitionsRequest } from '../../src/requests/competitions';
import axios, { AxiosInstance } from 'axios';
import sinon, { SinonSandbox } from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('CompetitionsRequest', () => {
	let sandbox: SinonSandbox;
	let axiosInstance: AxiosInstance;
	let request: CompetitionsRequest;

	beforeEach(() => {
		sandbox = sinon.createSandbox();
		axiosInstance = axios.create();
		request = new CompetitionsRequest(axiosInstance);
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('competitions', () => {
		it('calls the /competitions for Spain', async () => {
			const stub = sandbox.stub(request.axios, 'get').resolves(Promise.resolve({ data: {} }));

			await request.getCompetition('XX8syTD');
			expect(stub).to.have.been.calledWith('/competitions/XX8syTD');
		});
	});
});
