export interface IInputProps {
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  items: string[];
  dropdown: boolean;
}
