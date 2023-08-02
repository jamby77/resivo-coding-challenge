import { ConnectionType } from './ConnectionType';
import { ConnectionStatus } from './ConnectionStatus';

export interface Door {
  id: string;
  name: string;
  buildingName: string;
  apartmentName: string;
  connectionType: ConnectionType;
  connectionStatus: ConnectionStatus;
  lastConnectionStatusUpdate: string;
}
