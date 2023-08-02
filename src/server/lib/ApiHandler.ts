import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import createHttpError from 'http-errors';
import { HttpStatus } from '@/server/lib/HttpStatus';

type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ErrorResponse {
  error: {
    message: string;
    error?: unknown;
  };
  status?: number;
}

export class ApiHandler {
  private apiMethodMap: Partial<Record<ApiMethod, NextApiHandler>> = {};

  public readonly get = this.addHandlerMethod('GET');
  public readonly post = this.addHandlerMethod('POST');
  public readonly put = this.addHandlerMethod('PUT');
  public readonly delete = this.addHandlerMethod('DELETE');

  public getHandler() {
    return async (
      request: NextApiRequest,
      response: NextApiResponse<ErrorResponse>,
    ) => {
      await this.handleMethod(request, response);
    };
  }

  private addHandlerMethod(
    method: ApiMethod,
  ): (handler: NextApiHandler) => ApiHandler {
    return (handler: NextApiHandler) => {
      this.apiMethodMap[method] = handler;

      return this;
    };
  }

  private handleError(
    error: unknown,
    response: NextApiResponse<ErrorResponse>,
  ) {
    if (createHttpError.isHttpError(error) && error.expose) {
      return response
        .status(error.statusCode)
        .json({ error: { message: error.message } });
    }

    return response.status(HttpStatus.InternalServerError).json({
      error: { message: 'Internal Server Error', error },
      status: createHttpError.isHttpError(error)
        ? error.statusCode
        : HttpStatus.InternalServerError,
    });
  }

  private async handleMethod(
    request: NextApiRequest,
    response: NextApiResponse<ErrorResponse>,
  ) {
    try {
      if (!request.method) {
        throw new createHttpError.MethodNotAllowed(
          `no method specified on path ${request.url}!`,
        );
      }

      const method = request.method.toUpperCase();
      const handleRequest = this.apiMethodMap[method as ApiMethod];

      if (typeof handleRequest !== 'function') {
        throw new createHttpError.MethodNotAllowed(
          `method ${method} not allowed on path ${request.url}!`,
        );
      }

      await handleRequest(request, response);
    } catch (error) {
      this.handleError(error, response);
    }
  }
}
