import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { deleteFile } from "../../../../utils/file";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError("Usuário não existe");
    }

    if (userExists.avatar) {
      await deleteFile(`./tmp/avatar/${userExists.avatar}`);
    }

    userExists.avatar = avatar_file;

    await this.usersRepository.create(userExists);
  }
}

export { UpdateUserAvatarUseCase };
