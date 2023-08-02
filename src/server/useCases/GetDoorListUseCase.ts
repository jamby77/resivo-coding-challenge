import { injectable } from 'tsyringe';
import createHttpError from 'http-errors';
import keyBy from 'lodash-es/keyBy';
import { Door } from '@/models/Door';
import { UseCase } from '@/server/lib/UseCase';
import { DoorRepository } from '@/server/repositories/DoorRepository';
import { BuildingRepository } from '@/server/repositories/BuildingRepository';
import { DoorMapper } from '@/server/mappers/DoorMapper';

@injectable()
export class GetDoorListUseCase implements UseCase<Door[]> {
  constructor(
    private doorRepository: DoorRepository,
    private buildingRepository: BuildingRepository,
    private doorMapper: DoorMapper,
  ) {}

  public async execute() {
    try {
      const [doorDtos, buildingDtos] = await Promise.all([
        this.doorRepository.getAllDoors(),
        this.buildingRepository.getAllBuildings(),
      ]);

      const buildingDtosById = keyBy(buildingDtos, 'id');

      return doorDtos.map((doorDto) =>
        this.doorMapper.toDomain(doorDto, buildingDtosById),
      );
    } catch (error) {
      throw new createHttpError.ServiceUnavailable();
    }
  }
}
