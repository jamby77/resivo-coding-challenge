import { buildings } from './buildings';
import { apartments } from './apartments';
import { DoorDto } from './dtos/DoorDto';

export const doors: DoorDto[] = [
  {
    id: '63f4d82ef04826419cc6eaeb',
    name: 'Building Main Entrance',
    connection_type: 'wired',
    connection_status: 'online',
    last_connection_status_update: '2023-02-22T03:00:11.853Z',
    building_id: buildings[0].id,
  },
  {
    id: '63f4d87995adfc4869e6acab',
    name: 'Building Main Entrance',
    connection_type: 'wired',
    connection_status: 'online',
    last_connection_status_update: '2023-02-22T17:26:34.047Z',
    building_id: buildings[1].id,
  },
  {
    id: '63f4d8a2b71f7f2324e59d2e',
    name: 'Gym',
    connection_type: 'wired',
    connection_status: 'offline',
    last_connection_status_update: '2023-02-22T21:05:12.721Z',
    building_id: buildings[1].id,
  },
  {
    id: '63f4d88662423b9c744bb2f8',
    name: 'Garage',
    connection_type: 'wired',
    connection_status: 'online',
    last_connection_status_update: '2023-02-22T03:05:12.491Z',
    building_id: buildings[0].id,
  },
  {
    id: '63f4d8a8e431d9664f409ca4',
    name: 'Apartment Main Door',
    connection_type: 'wired',
    connection_status: 'online',
    last_connection_status_update: '2023-02-22T04:03:50.911Z',
    building_id: buildings[0].id,
    apartment_id: apartments[0].id,
  },
  {
    id: '63f4d8afc4cd4d26397a7ecd',
    name: 'Apartment Main Door',
    connection_type: 'wireless',
    connection_status: 'offline',
    last_connection_status_update: '2023-02-22T05:00:29.537Z',
    building_id: buildings[0].id,
    apartment_id: apartments[1].id,
  },
  {
    id: '63f4d8b5a1dc6642117a61bf',
    name: 'Apartment Main Door',
    connection_type: 'wireless',
    connection_status: 'offline',
    last_connection_status_update: '2023-02-22T12:13:36.252Z',
    building_id: buildings[1].id,
    apartment_id: apartments[2].id,
  },
  {
    id: '63f4d8c1aa341b8afb4c93ef',
    name: 'Apartment Main Door',
    connection_type: 'wireless',
    connection_status: 'online',
    last_connection_status_update: '2023-02-22T13:58:30.327Z',
    building_id: buildings[1].id,
    apartment_id: apartments[3].id,
  },
];
