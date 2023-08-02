import { buildings } from './buildings';
import { ApartmentDto } from './dtos/ApartmentDto';

export const apartments: ApartmentDto[] = [
  {
    id: '63f4e2825abc011556da74af',
    name: 'Apartment 1.1',
    floor: 1,
    building_id: buildings[0].id,
  },
  {
    id: '63f4e289106cebb6c73cba10',
    name: 'Apartment 1.2',
    floor: 1,
    building_id: buildings[0].id,
  },
  {
    id: '63f4e29948dc791a26d48334',
    name: 'Apartment 2.1',
    floor: 2,
    building_id: buildings[1].id,
  },
  {
    id: '63f4e29e497ae4fea80f2764',
    name: 'Apartment 2.2',
    floor: 2,
    building_id: buildings[1].id,
  },
];
