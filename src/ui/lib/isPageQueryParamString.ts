export function isPageQueryParamString(
  queryParam: string | string[] | undefined,
): queryParam is string {
  return typeof queryParam === 'string' ? true : false;
}
