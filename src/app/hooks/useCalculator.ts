import { FormEvent, useRef, useState } from 'react';
import { useCalculatorStore } from '../store';

export function useCalculator() {
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const [currencyEx, swapEx] = useCalculatorStore((state) => [
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
  return {
    error,
    amount,
    inputRef,
    currencyEx,
    swapEx,
    handleCalculate,
    resetError
  };
}
