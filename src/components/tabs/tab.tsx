import { TabsContent } from '@/components/ui/tabs';

type Props = {
  children: React.ReactNode;
  value: 'rates' | 'calculator';
};

function Tab({ children, value }: Props) {
  return (
    <TabsContent className='mt-10 space-y-20' value={value}>
      {children}
    </TabsContent>
  );
}
export default Tab;
