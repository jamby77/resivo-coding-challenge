import { container } from 'tsyringe';
import { buildings } from '@/__mocks__/buildings';
import { BuildingRepository } from './BuildingRepository';

describe('BuildingRepository', () => {
  let buildingRepository: BuildingRepository;

  beforeEach(() => {
    container.clearInstances();
    buildingRepository = container.resolve(BuildingRepository);
  });

  describe('getAllBuildings', () => {
    it('should return all buildings', async () => {
      const allBuildings = await buildingRepository.getAllBuildings();

      expect(allBuildings).toEqual(buildings);
    });
  });

  describe('getBuildingById', () => {
    it('should return building by id', async () => {
      const expectedBuilding = buildings[1];
      const building = await buildingRepository.getBuildingById(
        expectedBuilding.id,
      );

      expect(building).toEqual(expectedBuilding);
    });

    it('should return undefined if building id does not exist', async () => {
      const building = await buildingRepository.getBuildingById(
        '63f8685fd18204a0fc0fd9d2',
      );

      expect(building).toBeUndefined();
    });
  });
});
