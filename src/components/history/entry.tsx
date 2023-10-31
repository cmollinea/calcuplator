import { HistoryEntry, useHistoryStore } from '@/app/store/history-store';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card';
import { History, Trash2Icon } from 'lucide-react';
import { Button } from '../ui/button';

type Props = {
  entry: HistoryEntry;
};

function HistoryEntry({ entry }: Props) {
  const deleteHistoryEntry = useHistoryStore(
    (state) => state.deleteHistoryEntry
  );
  return (
    <Card className='relative group'>
      <Button
        onClick={() => deleteHistoryEntry(entry.id)}
        variant={'ghost'}
        size={'icon'}
        className=' hover:bg-transparent hover:text-red-500 sm:opacity-0 absolute right-2 sm:group-hover:opacity-100 transition-all ease-in'
      >
        <Trash2Icon size={16} />
      </Button>
      <CardHeader className='pb-2'>
        <CardTitle className='font-bold'>
          {entry.action === 'buy' ? 'Comprar' : 'Vender'} {entry.amount}{' '}
          {entry.source} {entry.action === 'buy' ? 'con' : 'por'} {entry.target}
        </CardTitle>
        <CardDescription className='flex items-center space-x-1'>
          <span>
            <History size={12} />
          </span>{' '}
          <small> {new Date(entry.timeStamp).toLocaleString()}</small>
        </CardDescription>
      </CardHeader>
      <CardContent className='pb-2 text-3xl'>
        {(entry.amount * entry.convertionRate).toFixed(2)}{' '}
        <small className='text-sm'>{entry.target}</small>
      </CardContent>
      <CardFooter className=''>
        <em> Tasa utilizada : {entry.convertionRate.toFixed(2)}</em>
      </CardFooter>
    </Card>
  );
}
export default HistoryEntry;
