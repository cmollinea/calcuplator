import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Action, Currencies } from '../global';

export type HistoryEntry = {
  id: string;
  action: Action;
  source: Currencies;
  target: Currencies;
  convertionRate: number;
  timeStamp: Date;
  amount: number;
};

interface IHistoryStore {
  history: HistoryEntry[];
  createNewHistoryEntry: (entry: HistoryEntry) => void;
  deleteHistoryEntry: (id: string) => void;
  clearHistory: () => void;
}

export const useHistoryStore = create<IHistoryStore>()(
  persist(
    (set, get) => ({
      history: [],

      createNewHistoryEntry: (entry) => {
        const prevHistory = get().history;
        set((state) => ({ history: [...prevHistory, entry] }));
      },

      deleteHistoryEntry: (id) => {
        const filteredHistory = get().history.filter((item) => {
          if (item.id !== id) {
            return item;
          }
        });

        set(() => ({ history: filteredHistory }));
      },

      clearHistory: () => {
        set(() => ({ history: [] }));
      }
    }),
    {
      name: 'calculator_history',
      partialize: (state) => ({ history: state.history })
    }
  )
);
