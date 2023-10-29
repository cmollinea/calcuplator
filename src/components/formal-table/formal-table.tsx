import { IFormalCup } from '@/app/global';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

type Props = {
  promise: Promise<IFormalCup | undefined>;
};

async function FormalTable({ promise }: Props) {
  const cupFormalRate = await promise;

  const rates =
    cupFormalRate &&
    Object.entries(cupFormalRate?.rates).map(([key, value]) => ({
      key,
      value
    }));

  const sortedRates = rates?.sort((a, b) => {
    return b.value.buy - a.value.buy;
  });

  return (
    <Table className='max-w-xs place-self-center'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[60px]'>Moneda</TableHead>
          <TableHead className='w-[60px]'>Compra</TableHead>
          <TableHead className='w-[60px]'>Venta</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedRates?.map((rate) => {
          if (rate.key !== 'CUP') {
            return (
              <TableRow key={rate.key}>
                <TableCell className='font-medium'>{rate.key}</TableCell>
                <TableCell className='text-red-500'>
                  {rate.value.buy.toFixed(2)}
                </TableCell>
                <TableCell className='text-green-500'>
                  {rate.value.sell.toFixed(2)}
                </TableCell>
              </TableRow>
            );
          }
        })}
      </TableBody>
    </Table>
  );
}

export default FormalTable;
