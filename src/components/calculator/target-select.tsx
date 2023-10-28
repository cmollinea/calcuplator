'use client';

import { Currencies } from '@/app/global';
import { useCalculatorStore } from '@/app/store/calculator-store';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

function TargetSelect() {
  const [currencyEx, setCurrencyEx] = useCalculatorStore((state) => [
    state.currencyEx,
    state.setCurrencyEx
  ]);

  const handleTargetSelection = (value: Currencies) => {
    const selection = { ...currencyEx, target: value };
    setCurrencyEx(selection);
  };

  return (
    <Select
      value={currencyEx.target}
      onValueChange={(value: Currencies) => handleTargetSelection(value)}
    >
      <SelectTrigger className='w-20 h-10'>
        <SelectValue placeholder='Select a currency' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Quiero...</SelectLabel>
          <SelectItem
            defaultChecked
            disabled={currencyEx.source === 'CUP'}
            value='CUP'
          >
            CUP
          </SelectItem>
          <SelectItem disabled={currencyEx.source === 'EUR'} value='EUR'>
            EUR
          </SelectItem>
          <SelectItem disabled={currencyEx.source === 'MLC'} value='MLC'>
            MLC
          </SelectItem>
          <SelectItem disabled={currencyEx.source === 'USD'} value='USD'>
            USD
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default TargetSelect;
