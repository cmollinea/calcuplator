'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { HistoryIcon } from 'lucide-react';

function History() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='w-fit font-light space-x-1 p-2' variant={'ghost'}>
          <HistoryIcon className='mx-0.5' size={16} /> Historial
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Historial de conversiones</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default History;
