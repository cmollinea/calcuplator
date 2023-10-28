import RateCard from '@/components/rate-card/rate-card';
import { getRates } from './services/get-rates';
import {
  EUR_ENDPOINT,
  FORMAL_RATE,
  MLC_ENDPOINT,
  USD_ENDPOINT
} from './constants/api-endpoints';
import { ICurrencyTarget, IFormalCup } from './global';
import Calculator from '@/components/calculator/calculator';
import Title from '@/components/ui/title';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import FormalTable from '@/components/formal-table/formal-table';

export const revalidate = 43200;

async function Home() {
  const [usdRates, mlcRates, eurRates] = await Promise.all([
    getRates<ICurrencyTarget>(USD_ENDPOINT),
    getRates<ICurrencyTarget>(MLC_ENDPOINT),
    getRates<ICurrencyTarget>(EUR_ENDPOINT)
  ]);

  const formalRate = getRates<IFormalCup>(FORMAL_RATE);

  const exRates = {
    USD: usdRates,
    MLC: mlcRates,
    EUR: eurRates
  };

  return (
    <main className='flex flex-col pt-20 space-y-16 '>
      <Title>
        Tasas de cambio <span className='text-red-500'>informales</span>
      </Title>
      <section className=' px-4 flex max-[1500px]:flex-col place-content-center items-center max-[1500px]:space-y-10 min-[1500px]:space-x-10'>
        <RateCard rates={usdRates} />
        <RateCard rates={mlcRates} />
        <RateCard rates={eurRates} />
      </section>
      <Title>
        Cal<span className='text-red-500'>CUP</span>lador App
      </Title>
      <section className='flex flex-col items-center place-content-center px-4 space-y-2'>
        <Alert className='mb-2 w-fit px-6 flex place-content-center'>
          {' '}
          <AlertDescription className='flex space-x-1'>
            {' '}
            <AlertTriangle className=' stroke-red-500 h-5 w-5' />
            <span> Usando las tasas informales</span>{' '}
          </AlertDescription>
        </Alert>
        <Calculator exRates={exRates} />
      </section>
      <Title>
        Tasas de cambio <span className='text-green-500'>formales</span>
      </Title>

      <FormalTable promise={formalRate} />
    </main>
  );
}
export default Home;
