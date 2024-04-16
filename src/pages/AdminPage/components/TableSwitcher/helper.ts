import { ECategories } from '@enums/ECategories';

import CarsTable from '../tables/CarsTable';
// import CarsPartsTable from '../tables/CarsPartsTable';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const categoryComponents = new Map<ECategories | null, React.ComponentType<any>>([
  [ECategories.cars, CarsTable],
  // [ECategories.carParts, CarsPartsTable],
]);
