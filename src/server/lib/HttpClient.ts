import { container, InjectionToken } from 'tsyringe';
import { AxiosAdapter } from './AxiosAdapter';

export interface HttpClient {
  get<Response>(url: string): Promise<Response>;
}

export const HttpClient: InjectionToken<HttpClient> = Symbol('HttpClient');

container.register(HttpClient, { useClass: AxiosAdapter });
