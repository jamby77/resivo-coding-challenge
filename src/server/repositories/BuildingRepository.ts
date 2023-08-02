import { injectable } from 'tsyringe';
import { BuildingDto } from '@/__mocks__/dtos/BuidlingDto';
import { buildings } from '@/__mocks__/buildings';

@injectable()
export class BuildingRepository {
  public getAllBuildings(): Promise<BuildingDto[]> {
    // simulate async response
    return Promise.resolve(buildings);
  }

  public getBuildingById(id: string): Promise<BuildingDto | undefined> {
    const foundBuilding = buildings.find((building) => building.id === id);

    // simulate async response
    return Promise.resolve(foundBuilding);
  }
}
