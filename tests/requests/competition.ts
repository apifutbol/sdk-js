import { CompetitionRequest } from '../../src/requests/competition';
import axios, { AxiosInstance } from 'axios';
import sinon, { SinonSandbox } from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('CompetitionRequest', () => {
    let sandbox: SinonSandbox;
    let axiosInstance: AxiosInstance;
    let request: CompetitionRequest;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        axiosInstance = axios.create();
        request = new CompetitionRequest(axiosInstance);
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('competition', () => {
        it('calls the /competition for Premier League', async () => {
            const stub = sandbox.stub(request.axios, 'get').resolves(Promise.resolve({ data: {} }));

            await request.getCompetition('CVnGZYv');
            expect(stub).to.have.been.calledWith('/competition/CVnGZYv');
        });
    });
});
