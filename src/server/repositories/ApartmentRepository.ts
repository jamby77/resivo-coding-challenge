import { injectable } from 'tsyringe';
import { ApartmentDto } from '@/__mocks__/dtos/ApartmentDto';
import { apartments } from '@/__mocks__/apartments';

@injectable()
export class ApartmentRepository {
  public getAllApartments(): Promise<ApartmentDto[]> {
    // simulate async response
    return Promise.resolve(apartments);
  }

  public getApartmentById(id: string): Promise<ApartmentDto | undefined> {
    const foundApartment = apartments.find((apartment) => apartment.id === id);

    // simulate async response
    return Promise.resolve(foundApartment);
  }
}
