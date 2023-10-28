import { create } from 'zustand';
import { CurrencyEx } from '../global';

const initialState: CurrencyEx = {
  source: 'USD',
  target: 'CUP'
};

interface ICalculatorStore {
  currencyEx: CurrencyEx;
  setCurrencyEx: (arg: CurrencyEx) => void;
}

export const useCalculatorStore = create<ICalculatorStore>((set) => ({
  currencyEx: initialState,
  setCurrencyEx: (newState: CurrencyEx) =>
    set((state) => ({ currencyEx: newState }))
}));
