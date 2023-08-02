import createHttpError from 'http-errors';

export function assertApiQueryParamIsString(
  queryParam: string | string[] | undefined,
): asserts queryParam is string {
  if (typeof queryParam !== 'string') {
    throw new createHttpError.BadRequest(
      `query parameter ${queryParam} is not a string`,
    );
  }
}
