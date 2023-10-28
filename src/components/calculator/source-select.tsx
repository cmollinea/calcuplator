'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useCalculatorStore } from '@/app/store/calculator-store';
import { Currencies } from '@/app/global';

function SourceSelect() {
  const [currencyEx, setCurrencyEx] = useCalculatorStore((state) => [
    state.currencyEx,
    state.setCurrencyEx
  ]);

  const handleSourceSelection = (value: Currencies) => {
    const selection = { ...currencyEx, source: value };
    setCurrencyEx(selection);
  };
  return (
    <Select
      value={currencyEx.source}
      onValueChange={(value: Currencies) => handleSourceSelection(value)}
    >
      <SelectTrigger className='w-20 h-10'>
        <SelectValue defaultValue={'USD'} placeholder='Select a currency' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Poseo...</SelectLabel>
          <SelectItem
            defaultChecked
            disabled={currencyEx.target === 'USD'}
            value='USD'
          >
            USD
          </SelectItem>
          <SelectItem disabled={currencyEx.target === 'MLC'} value='MLC'>
            MLC
          </SelectItem>
          <SelectItem disabled={currencyEx.target === 'EUR'} value='EUR'>
            EUR
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default SourceSelect;
