import { FormEvent, useRef, useState } from 'react';
import { useCalculatorStore } from '../store';

export function useCalculator() {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const [action, currencyEx, swapEx] = useCalculatorStore((state) => [
    state.action,
    state.currencyEx,
    state.swapEx
  ]);

  const resetError = () => {
    if (error) {
      setError(false);
    }
  };

  const handleCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const _amount_ = Number(inputRef.current?.value);

    if (isNaN(_amount_) || _amount_ <= 0) {
      setError(true);
      return;
    }
    setAmount(_amount_);
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
