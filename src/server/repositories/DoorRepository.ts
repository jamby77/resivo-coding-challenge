import { injectable } from 'tsyringe';
import { DoorDto } from '@/__mocks__/dtos/DoorDto';
import { doors } from '@/__mocks__/doors';

@injectable()
export class DoorRepository {
  public getAllDoors(): Promise<DoorDto[]> {
    // simulate async response
    return Promise.resolve(doors);
  }

  public getDoorById(id: string): Promise<DoorDto | undefined> {
    const foundDoor = doors.find((door) => door.id === id);

    // simulate async response
    return Promise.resolve(foundDoor);
  }
}
