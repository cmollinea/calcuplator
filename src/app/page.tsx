import RateCard from '@/components/rate-card/rate-card';
import {
  CUP_ENDPOINT,
  EUR_ENDPOINT,
  FORMAL_RATE,
  MLC_ENDPOINT,
  USD_ENDPOINT
} from './constants/api-endpoints';
import { ICurrencyTarget, IFormalCup } from './global';
import Calculator from '@/components/calculator/calculator';
import Title from '@/components/ui/title';
import { AlertTriangle, LucideInfo } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import FormalTable from '@/components/formal-table/formal-table';
import { getRates } from './services';
import TabsContainer from '@/components/tabs/tabs-container';
import Tab from '@/components/tabs/tab';

// export const revalidate = 43200;

async function Home() {
  const [usdRates, mlcRates, eurRates, cupRates] = await Promise.all([
    getRates<ICurrencyTarget>(USD_ENDPOINT),
    getRates<ICurrencyTarget>(MLC_ENDPOINT),
    getRates<ICurrencyTarget>(EUR_ENDPOINT),
    getRates<ICurrencyTarget>(CUP_ENDPOINT)
  ]);

  const formalRate = getRates<IFormalCup>(FORMAL_RATE);

  const exRates = {
    USD: usdRates,
    MLC: mlcRates,
    EUR: eurRates,
    CUP: cupRates
  };

  //TODO Agreagar a la card el footer con las demas variaciones

  return (
    <main className='flex flex-col py-20 space-y-16 px-4'>
      <TabsContainer>
        <Tab value='rates'>
          <Title>
            Tasas de cambio <span className='text-red-500'>informales</span>
          </Title>
          <section className='flex max-[1500px]:flex-col place-content-center items-center max-[1500px]:space-y-10 min-[1500px]:space-x-10'>
            <RateCard rates={usdRates} />
            <RateCard rates={mlcRates} />
            <RateCard rates={eurRates} />
          </section>
          <Title>
            Tasas de cambio <span className='text-green-500'>formales</span>
          </Title>
          <section className='flex flex-col items-center place-content-center space-y-2'>
            <Alert className='mb-2 w-fit px-6 '>
              {' '}
              <AlertDescription className='flex space-x-1 items-center place-content-center'>
                {' '}
                <LucideInfo className='stroke-green-500 h-5' />
                <span>Tomando como referencia el CUP</span>{' '}
              </AlertDescription>
            </Alert>
            <FormalTable promise={formalRate} />
          </section>
        </Tab>
        <Tab value='calculator'>
          <Title>
            Cal<span className='text-red-500'>CUP</span>lador App
          </Title>
          <section className='flex flex-col items-center place-content-center px-4 space-y-2'>
            <Alert className='mb-2 w-fit px-6'>
              {' '}
              <AlertDescription className='flex place-content-center items-center space-x-1'>
                {' '}
                <AlertTriangle className=' stroke-red-500 h-5' />
                <span> Usando las tasas informales</span>{' '}
              </AlertDescription>
            </Alert>
            <Calculator exRates={exRates} />
          </section>
        </Tab>
      </TabsContainer>
    </main>
  );
}
export default Home;
