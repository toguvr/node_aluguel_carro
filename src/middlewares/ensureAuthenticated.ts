import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementatios/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token não encontrado", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(token, "123456") as IPayload;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("Usuário não encontrado", 401);
    }

    request.user = { id: user_id };
    next();
  } catch (err) {
    throw new AppError("Token inválido", 401);
  }
}
