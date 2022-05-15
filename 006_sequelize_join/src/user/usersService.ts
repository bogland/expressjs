// src/users/usersService.ts
import { User } from "./user";
import Model from "../models"

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

export class UsersService {
  public async get(id: number, name?: string): Promise<User> {
    const res = await Model.user.findAll({
      include: [
         {
           model: Model.board,
           attributes: ['userId']
         }
      ],
      where: {id},
 });
 console.log("res :",res);
    return {
      ...res
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