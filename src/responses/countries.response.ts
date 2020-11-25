import { CountryItem } from './model';

export interface CountriesResponse {
    data: CountriesResponseItems;
}

export interface CountriesResponseItems {
    country: CountryItem[];
}
