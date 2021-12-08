import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailExists = this.usersRepository.findByEmail(email);

    const createdUser = this.usersRepository.create({ email, name });

    if (emailExists) {
      throw new Error("This email is alredy being used by another user");
    }

    return createdUser;
  }
}

export { CreateUserUseCase };
