import axios, { AxiosHeaders, AxiosInstance } from 'axios';
import { singleton } from 'tsyringe';
import { apiBaseUrl } from '@/lib/config';
import { HttpClient } from '@/server/lib/HttpClient';

@singleton()
export class AxiosAdapter implements HttpClient {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: apiBaseUrl,
    });
  }

  public async get<Response>(url: string) {
    const response = await this.axios.get<Response>(url, {
      headers: this.getAxiosHeaders(),
    });

    return response.data;
  }

  public async post<Response, Data>(url: string, data: Data) {
    const response = await this.axios.post<Response>(url, data, {
      headers: this.getAxiosHeaders(),
    });

    return response.data;
  }

  private getAxiosHeaders() {
    return new AxiosHeaders().set('content-type', 'application/json');
  }
}
