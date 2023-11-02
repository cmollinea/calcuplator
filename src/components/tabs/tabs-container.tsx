'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Props = {
  children: React.ReactNode;
};

function TabsContainer({ children }: Props) {
  return (
    <Tabs defaultValue='rates' className='w-full flex flex-col'>
      <TabsList className='w-fit place-self-center'>
        <TabsTrigger className='text-xl font-bold' value='rates'>
          Tasas de Cambio
        </TabsTrigger>
        <TabsTrigger className='text-xl font-bold' value='calculator'>
          CalCUPlador
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
}
export default TabsContainer;
