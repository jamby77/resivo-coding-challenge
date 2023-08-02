import { container } from 'tsyringe';
import { apartments } from '@/__mocks__/apartments';
import { ApartmentRepository } from './ApartmentRepository';

describe('ApartmentRepository', () => {
  let apartmentRepository: ApartmentRepository;

  beforeEach(() => {
    container.clearInstances();
    apartmentRepository = container.resolve(ApartmentRepository);
  });

  describe('getAllApartments', () => {
    it('should return all apartments', async () => {
      const allApartments = await apartmentRepository.getAllApartments();

      expect(allApartments).toEqual(apartments);
    });
  });

  describe('getApartmentById', () => {
    it('should return apartment by id', async () => {
      const expectedApartment = apartments[1];
      const apartment = await apartmentRepository.getApartmentById(
        expectedApartment.id,
      );

      expect(apartment).toEqual(expectedApartment);
    });

    it('should return undefined if apartment id does not exist', async () => {
      const apartment = await apartmentRepository.getApartmentById(
        '63f868e9992108ce4f0c0a44',
      );

      expect(apartment).toBeUndefined();
    });
  });
});
