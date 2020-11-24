import { ServerRequest } from '../../src/requests/server';
import axios, { AxiosInstance } from 'axios';
import sinon, { SinonSandbox } from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('ServerRequest', () => {
    let sandbox: SinonSandbox;
    let axiosInstance: AxiosInstance;
    let request: ServerRequest;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        axiosInstance = axios.create();
        request = new ServerRequest(axiosInstance);
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('ping', () => {
        it('calls the /server/ping endpoint', async () => {
            const stub = sandbox.stub(request['axios'], 'get').returns(Promise.resolve('pong'));
            await request.ping();
            expect(stub).to.have.been.calledWith('/server/ping');
        });
    });
});
