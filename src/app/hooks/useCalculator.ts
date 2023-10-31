import { FormEvent, useRef, useState } from 'react';
import { useCalculatorStore } from '../store';
import { HistoryEntry, useHistoryStore } from '../store/history-store';
import { randomUUID } from 'crypto';

export function useCalculator() {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const [action, currencyEx, swapEx] = useCalculatorStore((state) => [
    state.action,
    state.currencyEx,
    state.swapEx
  ]);

  const createNewHistoryEntry = useHistoryStore(
    (state) => state.createNewHistoryEntry
  );

  const resetError = () => {
    if (error) {
      setError(false);
    }
  };

  const handleCalculate = (e: FormEvent<HTMLFormElement>, rate: number) => {
    e.preventDefault();
    const _amount_ = Number(inputRef.current?.value);

    if (isNaN(_amount_) || _amount_ <= 0) {
      setError(true);
      return;
    }
    setAmount(_amount_);

    const entry: HistoryEntry = {
      id: crypto.randomUUID(),
      action: action,
      source: currencyEx.source,
      target: currencyEx.target,
      convertionRate: rate,
      timeStamp: new Date(),
      amount: _amount_
    };

    createNewHistoryEntry(entry);
  };

  const clean = () => {
    (inputRef.current as HTMLInputElement).value = '';
    setAmount(0);
  };

  return {
    action,
    amount,
    clean,
    currencyEx,
    error,
    handleCalculate,
    inputRef,
    resetError,
    swapEx
  };
}
