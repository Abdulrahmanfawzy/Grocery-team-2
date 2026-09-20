export interface IDeliveryWindow {
  id: string;
  title: string;
  time: string;
}

export interface IDeliveryWindowProps {
  title?: string;
  description?: string;
  options: IDeliveryWindow[];
  selectedIds: string[];
  onChange: (selectedIds: string[]) => void;
  multiple?: boolean;
}