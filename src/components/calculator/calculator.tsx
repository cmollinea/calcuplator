'use client';

import { ArrowRightLeftIcon, XSquareIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { getLength } from '@/app/utils';
import { Input } from '../ui/input';
import { useCalculator } from '@/app/hooks';
import SourceSelect from './source-select';
import TargetSelect from './target-select';
import type { ICurrencyTarget } from '@/app/global';

type Props = {
  exRates: {
    USD?: ICurrencyTarget;
    MLC?: ICurrencyTarget;
    EUR?: ICurrencyTarget;
    CUP?: ICurrencyTarget;
  };
};

function Calculator({ exRates }: Props) {
  const {
    inputRef,
    amount,
    error,
    currencyEx,
    swapEx,
    resetError,
    handleCalculate
  } = useCalculator();

  return (
    <Card className='max-w-sm w-full shadow shadow-card-foreground/20 p-2 transition-all ease-linear place-content-center items-center'>
      <CardHeader>
        <CardDescription>
          <small>
            Comprar {currencyEx.source} con {currencyEx.target}
          </small>
        </CardDescription>
        <CardTitle className='font-black flex items-center gap-2 text-center w-full'>
          <span
            className={`${
              getLength(inputRef.current?.value) > 9
                ? 'text-xl'
                : getLength(inputRef.current?.value) > 6
                ? 'text-2xl'
                : 'text-3xl'
            } font-bold h-fit text-center flex items-center`}
          >
            {amount > 0 ? (
              <>
                {(
                  amount *
                  (exRates[currencyEx.source]?.rates[currencyEx.target]
                    .sell as number)
                ).toFixed(2)}{' '}
                <sub className='text-sm px-1'>{currencyEx.target}</sub>
              </>
            ) : (
              'Total'
            )}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-3 w-full place-content-center'>
        <SourceSelect />
        <Button className='w-20 h-10' variant={'ghost'} onClick={swapEx}>
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
          <div className='flex space-x-2 mt-4'>
            <Button
              type='button'
              onClick={() => alert('a')}
              className='w-fit text-lg'
              size={'lg'}
              variant={'outline'}
            >
              Limpiar
            </Button>
            <Button type='submit' size={'lg'} className='text-lg w-full'>
              Calcular
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
}

export default Calculator;
