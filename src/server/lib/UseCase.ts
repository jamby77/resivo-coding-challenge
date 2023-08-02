export interface UseCase<TValue, TContext = undefined> {
  execute(params: TContext): Promise<TValue> | TValue;
}
