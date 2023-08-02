import { container } from 'tsyringe';
import { HttpError } from 'http-errors';
import { BuildingDto } from '@/__mocks__/dtos/BuidlingDto';
import { DoorDto } from '@/__mocks__/dtos/DoorDto';
import { DoorRepository } from '@/server/repositories/DoorRepository';
import { BuildingRepository } from '@/server/repositories/BuildingRepository';
import { GetDoorByIdUseCase } from './GetDoorByIdUseCase';

const buildingDto: BuildingDto = {
  id: '63f4e0797e85310fee059022',
  street: 'Bahnhofstrasse',
  street_no: '10A',
  zip: '8000',
  city: 'Zurich',
};

const doorDto: DoorDto = {
  id: '63f4d82ef04826419cc6eaeb',
  name: 'Building Main Entrance',
  connection_type: 'wired',
  connection_status: 'online',
  last_connection_status_update: '2023-02-22T22:01:47.573Z',
  building_id: buildingDto.id,
};

describe('GetDoorByIdUseCase', () => {
  let getDoorByIdUseCase: GetDoorByIdUseCase;

  beforeEach(() => {
    container.clearInstances();
    getDoorByIdUseCase = container.resolve(GetDoorByIdUseCase);
  });

  it('should call repository methods', async () => {
    const getDoorByIdSpy = jest
      .spyOn(DoorRepository.prototype, 'getDoorById')
      .mockImplementation(() => Promise.resolve(doorDto));

    const getBuildingByIdSpy = jest
      .spyOn(BuildingRepository.prototype, 'getBuildingById')
      .mockImplementation(() => Promise.resolve(buildingDto));

    await getDoorByIdUseCase.execute({ doorId: doorDto.id });

    expect(getDoorByIdSpy).toHaveBeenNthCalledWith(1, doorDto.id);
    expect(getBuildingByIdSpy).toHaveBeenNthCalledWith(1, buildingDto.id);
  });

  it('should throw if no door could be found', async () => {
    const getDoorByIdSpy = jest
      .spyOn(DoorRepository.prototype, 'getDoorById')
      .mockImplementation(() => Promise.resolve(undefined));

    const getBuildingByIdSpy = jest
      .spyOn(BuildingRepository.prototype, 'getBuildingById')
      .mockImplementation(() => Promise.resolve(buildingDto));

    try {
      await getDoorByIdUseCase.execute({ doorId: doorDto.id });
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError);
    }

    expect(getDoorByIdSpy).toHaveBeenNthCalledWith(1, doorDto.id);
    expect(getBuildingByIdSpy).not.toHaveBeenCalled();

    expect.assertions(3);
  });

  it('should throw if no building could be found', async () => {
    const getDoorByIdSpy = jest
      .spyOn(DoorRepository.prototype, 'getDoorById')
      .mockImplementation(() => Promise.resolve(doorDto));

    const getBuildingByIdSpy = jest
      .spyOn(BuildingRepository.prototype, 'getBuildingById')
      .mockImplementation(() => Promise.resolve(undefined));

    try {
      await getDoorByIdUseCase.execute({ doorId: doorDto.id });
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError);
    }

    expect(getDoorByIdSpy).toHaveBeenNthCalledWith(1, doorDto.id);
    expect(getBuildingByIdSpy).toHaveBeenNthCalledWith(1, buildingDto.id);

    expect.assertions(3);
  });
});
