import { TId } from './TId';

export type TCar = {
  id: TId;
  make: string;
  model: string;
  year: number;
  quantity: number;
  price: number;
  images: string[];
  description?: string;
};

export type TEditCar = Omit<TCar, 'id' | 'images'> & { id?: TId; images: (string | File)[] };

export type TOutputCar = TCar;

export type TContactMessage = {
  id: TId;
  carId: TId;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};

export type TInputEditContactMessage = Omit<TContactMessage, 'id' | 'createdAt'> & {
  id?: TId;
  createdAt?: Date;
};

export type TOutputContactMessage = TContactMessage;
