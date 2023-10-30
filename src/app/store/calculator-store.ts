import { create } from 'zustand';
import { CurrencyEx, Action } from '../global';

interface ICalculatorStore {
  currencyEx: CurrencyEx;
  action: Action;
  setCurrencyEx: (arg: CurrencyEx) => void;
  swapEx: () => void;
  changeAction: (newAction: Action) => void;
}

const initialState: CurrencyEx = {
  source: 'USD',
  target: 'CUP'
};

export const useCalculatorStore = create<ICalculatorStore>((set, get) => ({
  currencyEx: initialState,

  setCurrencyEx: (newState) => set(() => ({ currencyEx: newState })),

  swapEx: () => {
    const currentEx = get().currencyEx;
    const [currentSource, currentTarget] = [currentEx.source, currentEx.target];
    set(() => ({
      currencyEx: {
        source: currentTarget,
        target: currentSource
      }
    }));
  },

  action: 'buy',

  changeAction: (newAction) => {
    set(() => ({ action: newAction }));
  }
}));
