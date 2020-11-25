import APIFutbol from '../src/index';
import { CountriesRequest } from '../src/requests/';

import { expect } from 'chai';

const data = {
    token: 'token',
    prod: false,
};

Object.freeze(data);

describe('APIFutbol', () => {
    let sdk: APIFutbol;

    beforeEach(() => (sdk = new APIFutbol(data.token, data.prod)));

    it('initializes', () => {
        expect(sdk).to.be.instanceOf(APIFutbol);
    });

    it('returns CountriesRequest', () => {
        expect(sdk.countries).to.be.instanceOf(CountriesRequest);
    });

    describe('Axios', () => {
        it('gets token from Axios default header', () => {
            sdk['axios'].defaults.headers.Authorization;
            expect(sdk.token).to.equal('token');
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
            sdk = new APIFutbol(data.token, true);
            expect(sdk.url).to.contain('prod');
        });
    });
});
