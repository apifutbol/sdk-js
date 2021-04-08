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

      await request.getCountries();
      expect(stub).to.have.been.calledWith('/countries');
    });
  });

  describe('competitions', () => {
    it('calls the /competitions endpoint for England', async () => {
      const stub = sandbox.stub(request.axios, 'get').resolves(Promise.resolve({ data: {} }));

      await request.getCompetitions('BZLNE2qASCB');
      expect(stub).to.have.been.calledWith('/countries/BZLNE2qASCB/competitions');
    });
  });
});
