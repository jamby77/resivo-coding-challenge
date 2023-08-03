import { container } from 'tsyringe';
import { HttpError } from 'http-errors';
import { BuildingDto } from '@/__mocks__/dtos/BuidlingDto';
import { DoorDto } from '@/__mocks__/dtos/DoorDto';
import { DoorRepository } from '@/server/repositories/DoorRepository';
import { BuildingRepository } from '@/server/repositories/BuildingRepository';
import { GetDoorByIdUseCase } from './GetDoorByIdUseCase';
import { ApartmentDto } from '@/__mocks__/dtos/ApartmentDto';
import { ApartmentRepository } from '@/server/repositories/ApartmentRepository';

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
const apartmentDto: ApartmentDto = {
  id: '63f4e2825abc011556da74af',
  name: 'Apartment 1.1',
  floor: 1,
  building_id: buildingDto.id,
};
const doorOfApartmentDto: DoorDto = {
  id: '63f4d82ef04826419cc6eaec',
  name: 'Apartment Main Entrance',
  connection_type: 'wired',
  connection_status: 'online',
  last_connection_status_update: '2023-02-22T22:01:47.573Z',
  building_id: buildingDto.id,
  apartment_id: apartmentDto.id,
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
  it('should show apartment name', async () => {
    const getApartmentDoorByIdSpy = jest
      .spyOn(DoorRepository.prototype, 'getDoorById')
      .mockImplementation(() => Promise.resolve(doorOfApartmentDto));
    const getBuildingByIdSpy = jest
      .spyOn(BuildingRepository.prototype, 'getBuildingById')
      .mockImplementation(() => Promise.resolve(buildingDto));
    const getApartmentByIdSpy = jest
      .spyOn(ApartmentRepository.prototype, 'getApartmentById')
      .mockImplementation(() => Promise.resolve(apartmentDto));

    const door = await getDoorByIdUseCase.execute({
      doorId: doorOfApartmentDto.id,
    });
    expect(getApartmentDoorByIdSpy).toHaveBeenNthCalledWith(
      1,
      doorOfApartmentDto.id,
    );
    expect(getBuildingByIdSpy).toHaveBeenNthCalledWith(1, buildingDto.id);

    expect(getApartmentByIdSpy).toHaveBeenNthCalledWith(1, apartmentDto.id);
    expect(door.apartmentName).toEqual('Apartment 1.1');
  });
});
