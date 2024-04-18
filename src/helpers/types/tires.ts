import { TId } from './TId';

export type TTire = {
  id: TId;
  brand: string;
  model: string;
  size: string;
  loadIndex: number;
  speedRating: string;
  images: string[];
  quantity: number;
  price: number;
  description?: string;
};

export type TEditTire = Omit<TTire, 'id' | 'images'> & { id?: TId; images: (string | File)[] };

export type TOutputTire = TTire;
