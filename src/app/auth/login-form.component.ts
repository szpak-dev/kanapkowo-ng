import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormsModule} from "@angular/forms";
import {Credentials, loginUser} from "./auth.service";
import {User} from "../users/user.model";

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [
    FormsModule,
  ],
  template: `
      <div>
          <label for="username">Login: </label>
          <input id="username" type="text" [(ngModel)]="credentials.username" required>
          <br><br>
          <label for="password">Password: </label>
          <input id="password" type="password" [(ngModel)]="credentials.password" required>
          <br><br>
          <button (click)="onSubmit()" class="btn btn-primary">Login</button>
      </div>
  `
})
export class LoginFormComponent {
  @Input() timeForLogin = 5
  @Output() successfulLogin = new EventEmitter<User>();

  credentials: Credentials = {
    username: '',
    password: '',
  }

  onSubmit() {
    const user = loginUser(this.credentials);
    this.successfulLogin.emit(user);
  }
}
