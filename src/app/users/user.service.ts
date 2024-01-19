import {User} from "./user.model";
import {Injectable} from "@angular/core";

const userDatabase = [
  new User(1, 'user1', 'pass1', false),
  new User(2, 'user2', 'pass2', false),
]

export function getUser(username: string): User {
  const found = userDatabase.filter((user: User) => user.username === username);

  if (!found.length) {
    throw new Error('User not found');
  }

  return found[0];
}

@Injectable()
export class UserService {

}
