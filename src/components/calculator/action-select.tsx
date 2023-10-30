'use client';

import { Action } from '@/app/global';
import { useCalculatorStore } from '@/app/store';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

function ActionSelect() {
  const [action, changeAction, currencyEx] = useCalculatorStore((state) => [
    state.action,
    state.changeAction,
    state.currencyEx
  ]);
  return (
    <Select
      value={action}
      onValueChange={(value: Action) => changeAction(value)}
    >
      <SelectTrigger className='w-full mb-4 h-10'>
        <SelectValue defaultValue={'USD'} placeholder='Select a currency' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>¿Qué deseas hacer?</SelectLabel>
          <SelectItem defaultChecked value='buy'>
            Comprar {currencyEx.source} con {currencyEx.target}
          </SelectItem>
          <SelectItem value='sell'>
            Vender {currencyEx.source} por {currencyEx.target}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default ActionSelect;
