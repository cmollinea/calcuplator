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
  console.log(rates);

  return (
    <Table className='max-w-md place-self-center'>
      <TableCaption>Tomando el CUP como referencia</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Moneda</TableHead>
          <TableHead>Compra</TableHead>
          <TableHead>Venta</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rates?.map((rate) => (
          <TableRow key={rate.key}>
            <TableCell className='font-medium'>{rate.key}</TableCell>
            <TableCell className='text-red-500'>
              {rate.value.buy.toFixed(2)}
            </TableCell>
            <TableCell className='text-green-500'>
              {rate.value.sell.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default FormalTable;
