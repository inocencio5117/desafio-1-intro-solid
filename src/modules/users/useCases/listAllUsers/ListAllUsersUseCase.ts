import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isAdmin = this.usersRepository.findById(user_id);

    const allUsers = this.usersRepository.list();

    if (!isAdmin.admin) {
      throw new Error("List off all user can only be accessed by admin users");
    }

    return allUsers;
  }
}

export { ListAllUsersUseCase };
