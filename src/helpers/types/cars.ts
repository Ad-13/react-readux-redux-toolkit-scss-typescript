import { TId } from './TId';

export type TCar = {
  id: TId;
  make: string;
  model: string;
  year: number;
  quantity: number;
  price: number;
  images: string[];
  info?: string;
};

export type TEditCar = Omit<TCar, 'id' | 'images'> & { id?: TId; images: (string | File)[] };

export type TOutputCar = TCar;
