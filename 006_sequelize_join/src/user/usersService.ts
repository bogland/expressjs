// src/users/usersService.ts
import { User } from "./user";
import Model from "../models"

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

export class UsersService {
  public get(id: number, name?: string): User {
    const res = Model["user"].findAll({
      include: [
         {
           model: Model["board"],
           attributes: ['id', 'name']
         }
      ],
      where: {id},
 });
console.log(res);

    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationParams,
    };
  }
}