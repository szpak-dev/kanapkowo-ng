export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public admin: boolean,
    ) {
  }

  sayMyName() {
    console.log(this.username);
  }

  changePassword(oldPassword: string, newPassword: string) {
    if (this.password === oldPassword) {
      this.password = newPassword;
      return;
    }

    throw new Error('Uciekaj łobuzie!');
  }
}

function getUser() {

}


