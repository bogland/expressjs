// src/users/usersService.ts
import User from "../models/users.js"
import Board from "../models/board.js"
// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

export class UsersService {
  public get(id: number, name?: string): any {
    User.findAll({
      include: [
         {
           model: Board,
           attributes: ['id', 'name']
         }
      ],
      where: {id},
 });


    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): any {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationParams,
    };
  }
}