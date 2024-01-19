import {User} from "../users/user.model";
import {getUser} from "../users/user.service";

export interface Credentials {
  username: string;
  password: string;
}

export function loginUser(credentials: Credentials): User {
  const user = getUser(credentials.username);

  if (user.password !== credentials.password) {
    throw new Error('Invalid credentials');
  }

  storeLoggedInUser(user);
  return user;
}

function storeLoggedInUser(user: User) {
  localStorage.setItem('loggedInUser', JSON.stringify(user));
}

export function getStoredLoggedInUser(): User {
  const serializedUser = localStorage.getItem('loggedInUser');

  if (!serializedUser) {
    throw new Error('No stored logged-in User found');
  }

  // @ts-ignore
  const {id, username} = JSON.parse(serializedUser);
  return new User(id, username, '', false);
}
