export interface SelectFieldProps {
  label: string;
  value: string;
  onChange: Function;
  defaultOption: string;
  options: string[];
  error?: string;
  name: string;
}
