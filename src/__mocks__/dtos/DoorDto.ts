export interface DoorDto {
  id: string;
  name: string;
  connection_type: 'wired' | 'wireless';
  connection_status: 'online' | 'offline';
  last_connection_status_update: string;
  building_id: string;
  apartment_id?: string;
}
