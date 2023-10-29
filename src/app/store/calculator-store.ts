import { create } from 'zustand';
import { CurrencyEx } from '../global';

const initialState: CurrencyEx = {
  source: 'USD',
  target: 'CUP'
};

interface ICalculatorStore {
  currencyEx: CurrencyEx;
  setCurrencyEx: (arg: CurrencyEx) => void;
  swapEx: () => void;
}

export const useCalculatorStore = create<ICalculatorStore>((set, get) => ({
  currencyEx: initialState,

  setCurrencyEx: (newState: CurrencyEx) =>
    set((state) => ({ currencyEx: newState })),

  swapEx: () => {
    const currentEx = get().currencyEx;
    const [currentSource, currentTarget] = [currentEx.source, currentEx.target];
    set(() => ({
      currencyEx: {
        source: currentTarget,
        target: currentSource
      }
    }));
  }
}));
