import { TId } from './TId';

export type TCar = {
  id: TId;
  make: string;
  model: string;
  year: number;
  price: number;
  img: string;
  info?: string;
};

export type TInputCreateCar = Omit<TCar, 'id'>;

export type TInputUpdateCar = TInputCreateCar & Pick<TCar, 'id'>;

export type TOutputCar = TCar;
