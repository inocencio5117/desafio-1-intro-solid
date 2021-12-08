import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
      admin: false,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const idFound = this.users.find((user) => user.id === id);

    return idFound === undefined ? undefined : idFound;
  }

  findByEmail(email: string): User | undefined {
    const emailFound = this.users.find((user) => user.email === email);

    return emailFound === undefined ? undefined : emailFound;
  }

  turnAdmin(receivedUser: User): User {
    const userFound = this.users.find((user) => user === receivedUser);

    if (userFound && !userFound.admin) {
      userFound.admin = true;
      userFound.updated_at = new Date();
    }

    return userFound;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
