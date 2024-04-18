import { ECategories } from '@enums/ECategories';

import CarsTable from '../tables/CarsTable';
import TiresTable from '../tables/TiresTable';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const categoryComponents = new Map<ECategories | null, React.ComponentType<any>>([
  [ECategories.cars, CarsTable],
  [ECategories.tires, TiresTable],
]);
