import APIFutbol from '../src/index';
import { CountriesRequest, CompetitionRequest } from '../src/requests/';

import { expect } from 'chai';

const data = {
  token: 'mytoken',
  prod: false,
};

Object.freeze(data);

describe('APIFutbol', () => {
  let sdk: APIFutbol;

  beforeEach(() => (sdk = new APIFutbol(data.token, data.prod)));

  it('initializes', () => {
    expect(sdk).to.be.instanceOf(APIFutbol);
  });

  it("checks if being told to not use 'token' as token", () => {
    expect(() => {
      new APIFutbol('token');
    }).to.throw('Replace "token" with your API Futbol Token');
  });

  it('returns CountriesRequest', () => {
    expect(sdk.countries).to.be.instanceOf(CountriesRequest);
  });

  it('returns CompetitionRequest', () => {
    expect(sdk.competition).to.be.instanceOf(CompetitionRequest);
  });

  describe('Axios', () => {
    it('gets token from Axios default header', () => {
      sdk['axios'].defaults.headers.Authorization;
      expect(sdk.token).to.equal('mytoken');
    });

    it('sets token as auth header in Axios', () => {
      sdk.token = 'new token';
      expect(sdk['axios'].defaults.headers.Authorization).to.equal('Bearer new token');
    });

    it('gets url from Axios', () => {
      sdk['axios'].defaults.url;
      expect(sdk.url).to.contain('dev');
    });

    it('sets prod url in Axios', () => {
      const sdk = new APIFutbol(data.token, true);
      expect(sdk.url).to.contain('prod');
    });
  });
});
