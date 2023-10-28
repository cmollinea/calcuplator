'use client';

import { ArrowRightLeftIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '../ui/input';
import { FormEvent, useRef, useState } from 'react';
import SourceSelect from './source-select';
import TargetSelect from './target-select';
import type { ICurrencyTarget, CurrencyEx } from '@/app/global';
import { useCalculatorStore } from '@/app/store/calculator-store';

type Props = {
  exRates: {
    USD?: ICurrencyTarget;
    MLC?: ICurrencyTarget;
    EUR?: ICurrencyTarget;
    CUP?: ICurrencyTarget;
  };
};

const incitialState: CurrencyEx = {
  source: 'USD',
  target: 'CUP'
};

function Calculator({ exRates }: Props) {
  const [currencyEx, setCurrencyState] = useCalculatorStore((state) => [
    state.currencyEx,
    state.setCurrencyEx
  ]);
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleSwapCurrencies = () => {
    const [newSource, newTarget] = [currencyEx.target, currencyEx.source];
    setCurrencyState({ source: newSource, target: newTarget });
  };

  const calculateTotalValue = () => {};

  return (
    <Card className='max-w-md w-full shadow shadow-card-foreground/20 p-2 transition-all ease-linear place-content-center items-center'>
      <CardHeader>
        <CardDescription>
          <small>
            Comprar {currencyEx.source} con {currencyEx.target}
          </small>
        </CardDescription>
        <CardTitle className='font-black flex items-center gap-2 text-center w-full'>
          {inputRef.current?.value !== undefined && (
            <span
              className={`${
                inputRef.current.value.length > 9
                  ? 'text-xl'
                  : inputRef.current?.value.length > 6
                  ? 'text-2xl'
                  : 'text-3xl'
              } font-bold h-fit text-center flex items-center`}
            >
              {' '}
              {(
                amount *
                (exRates[currencyEx.source]?.rates[currencyEx.target]
                  .sell as number)
              ).toFixed(2)}{' '}
              <sub className='text-sm px-1'>{currencyEx.target}</sub>
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-3 w-full place-content-center'>
        <SourceSelect />
        <Button
          className='w-20 h-10'
          variant={'ghost'}
          onClick={handleSwapCurrencies}
        >
          <ArrowRightLeftIcon size={24} />
        </Button>
        <TargetSelect />
      </CardContent>
      <CardFooter>
        <form className='w-full' onSubmit={(e) => handleCalculate(e)}>
          <Input
            onChange={resetError}
            ref={inputRef}
            className='h-12 placeholder:opacity-60'
            inputMode='numeric'
            placeholder='Ingrese la cantidad deseada'
          />
          {error && <span>Error</span>}
        </form>
      </CardFooter>
    </Card>
  );
}

export default Calculator;
