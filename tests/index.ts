import APIFutbol from '../src/index';
import { CountriesRequest } from '../src/requests/';

import { expect } from 'chai';

const data = {
  token: 'mytoken',
};

Object.freeze(data);

describe('SDK', () => {
  let sdk: APIFutbol;

  beforeEach(() => (sdk = new APIFutbol(data.token)));

  it('initialises', () => {
    expect(sdk).to.be.instanceOf(APIFutbol);
  });

  it("checks if being told to not use 'token' as token", () => {
    expect(() => {
      new APIFutbol('token');
    }).to.throw('Replace "token" with your API Futbol Token');
  });

  it('returns request if called', () => {
    expect(sdk.countries).to.be.instanceOf(CountriesRequest);
  });

  describe('Axios', () => {
    it('sets token as auth header in Axios', () => {
      sdk.token = 'new token';
      expect(sdk['axios'].defaults.headers.Authorization).to.equal('Bearer new token');
    });
  });
});
