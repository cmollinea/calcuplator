'use client';

import { useHistoryStore } from '@/app/store/history-store';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Frown, HistoryIcon, Trash2 } from 'lucide-react';
import { useStore } from 'zustand';
import HistoryEntry from './entry';

function History() {
  const [history, clearHistory] = useStore(useHistoryStore, (state) => [
    state.history,
    state.clearHistory
  ]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='w-fit font-light space-x-1 p-2' variant={'ghost'}>
          <HistoryIcon className='mx-0.5' size={16} /> Historial
        </Button>
      </SheetTrigger>

      <SheetContent className='pb-16 overflow-y-scroll'>
        <SheetHeader>
          <SheetTitle className='grid justify-items-center gap-2'>
            <h2> Historial de conversiones</h2>
            {history.length > 0 ? (
              <Button
                onClick={clearHistory}
                className='flex items-center space-x-1'
                variant={'destructive'}
              >
                <Trash2 size={15} />
                <span>Vaciar Historial</span>
              </Button>
            ) : null}
          </SheetTitle>
        </SheetHeader>
        {history.length > 0 ? (
          <div className='flex flex-col space-y-2 mt-4 overflow-y-auto'>
            {history?.map((entry) => (
              <HistoryEntry key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <div className='min-h-full grid place-content-center justify-items-center justify-center gap-5'>
            <Frown size={90} />
            <p className='text-3xl text-center'>
              Aùn no hay conversiones para mostrar
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default History;
