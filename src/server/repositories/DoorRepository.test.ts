import { container } from 'tsyringe';
import { doors } from '@/__mocks__/doors';
import { DoorRepository } from './DoorRepository';

describe('DoorRepository', () => {
  let doorRepository: DoorRepository;

  beforeEach(() => {
    container.clearInstances();
    doorRepository = container.resolve(DoorRepository);
  });

  describe('getAllDoors', () => {
    it('should return all doors', async () => {
      const allDoors = await doorRepository.getAllDoors();

      expect(allDoors).toEqual(doors);
    });
  });

  describe('getDoorById', () => {
    it('should return door by id', async () => {
      const expectedDoor = doors[1];
      const door = await doorRepository.getDoorById(expectedDoor.id);

      expect(door).toEqual(expectedDoor);
    });

    it('should return undefined if door id does not exist', async () => {
      const door = await doorRepository.getDoorById('63f869cc4851a3d2ecf0442d');

      expect(door).toBeUndefined();
    });
  });
});
