import { Input } from '@/components/atoms/Input/input';
import { Label } from '@/components/atoms/Label/label';

interface Props {
  placeholder?: string;
  id: string;
  label?: string;
  type:
    | 'text'
    | 'password'
    | 'email'
    | 'tel'
    | 'number'
    | 'range'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'search'
    | 'url'
    | 'color';
}

const FormTextInput = ({ placeholder, id, type, label }: Props) => {
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input type={type} placeholder={placeholder} id={id} name={id} />
    </>
  );
};

export { FormTextInput };
