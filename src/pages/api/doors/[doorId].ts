import 'reflect-metadata';
import type { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';
import { Door } from '@/models/Door';
import { ApiHandler } from '@/server/lib/ApiHandler';
import { assertApiQueryParamIsString } from '@/server/lib/assertApiQueryParamIsString';
import { GetDoorByIdUseCase } from '@/server/useCases/GetDoorByIdUseCase';

const getDoorByIdUseCase = container.resolve(GetDoorByIdUseCase);

export default new ApiHandler()
  .get(async (request: NextApiRequest, response: NextApiResponse<Door>) => {
    const doorId = request.query.doorId;
    assertApiQueryParamIsString(doorId);

    const data = await getDoorByIdUseCase.execute({ doorId });
    response.status(200).json(data);
  })
  .getHandler();
