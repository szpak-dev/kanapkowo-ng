import {User} from "./user.model";

const userDatabase = [
  new User(1, 'user1', 'pass1'),
  new User(2, 'user2', 'pass2'),
]

export function getUser(username: string): User {
  const found = userDatabase.filter((user: User) => user.username === username);

  if (!found.length) {
    throw new Error('User not found');
  }

  return found[0];
}
