import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ICurrencyTarget } from '../../app/global';

type Props = {
  rates: ICurrencyTarget | undefined;
};

function RateCard({ rates }: Props) {
  return (
    <Card className='max-w-md w-full shadow shadow-card-foreground/20 p-2 hover:border-primary cursor-pointer transition-all ease-linear active:scale-[.98]'>
      <CardHeader>
        <CardTitle className=' max-md:text-4xl text-5xl font-black flex items-center gap-2'>
          {rates?.currency}/CUP
        </CardTitle>
        <CardDescription>
          <small>{new Date(rates?.date_time as string).toLocaleString()}</small>
        </CardDescription>
      </CardHeader>
      <CardContent className='grid grid-cols-2'>
        <div>
          <p className='font-light opacity-60'>Compra</p>
          <p className='text-3xl font-bold text-red-500'>
            ${rates?.rates.CUP.buy.toFixed(1)}
          </p>
        </div>
        <div>
          <p className='font-light opacity-60'>Venta</p>
          <p className='text-3xl font-bold text-green-400'>
            ${rates?.rates.CUP.sell.toFixed(1)}
          </p>
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
export default RateCard;
