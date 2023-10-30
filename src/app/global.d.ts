export interface ICurrencyTarget {
  currency: 'USD' | 'CUP' | 'MLC' | 'EUR';
  exchange_direction: 'string';
  date_time: 'string';
  rates: {
    USD: {
      buy: number;
      sell: number;
      mid: number;
    };
    MLC: {
      buy: number;
      sell: number;
      mid: number;
    };
    CUP: {
      buy: number;
      sell: number;
      mid: number;
    };
    EUR: {
      buy: number;
      sell: numebr;
      mid: number;
    };
  };
}

export type Currencies = 'USD' | 'CUP' | 'MLC' | 'EUR';

export type CurrencyEx = {
  source: Currencies;
  target: Currencies;
};

export interface IFormalCup {
  currency: string;
  exchange_direction: string;
  date_time: Date;
  rates: { [key: string]: FormalRate };
}

export interface FormalRate {
  buy: number;
  sell: number;
  mid: number;
}

export type Action = 'buy' | 'sell';
