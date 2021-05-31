import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    driver_license,
    email,
    password,
    name,
  }: ICreateUserDTO): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError("Usuário já existe");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      driver_license,
      email,
      password: passwordHash,
      name,
    });
  }
}

export { CreateUserUseCase };
