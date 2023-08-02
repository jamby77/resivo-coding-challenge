export interface EntityMapper<Domain extends object, Dto extends object> {
  toDomain(dto: Dto, ...additionalParams: unknown[]): Domain;
}
