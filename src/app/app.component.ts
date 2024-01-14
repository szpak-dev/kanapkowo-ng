import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {IngredientsListComponent} from "./ingredients/ingredients-list.component";
import {UserMenuComponent} from "./users/user-menu.component";
import {LoginFormComponent} from "./auth/login-form.component";
import {User} from "./users/user.model";
import {getStoredLoggedInUser} from "./auth/auth.service"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    IngredientsListComponent,
    UserMenuComponent,
    LoginFormComponent,
  ],
  template: `
      <div class="main">
          <div class="nav-bar">
              <div class="nav-bar-ele1">HOME</div>
              <div class="nav-bar-ele2">User (cook)</div>
          </div>
          <div class="container">
              @if (user) {
                  <user-menu/>
                  <ingredients-list/>
              } @else {
                  <login-form (successfulLogin)="onLoginSuccess($event)"/>
              }
          </div>
      </div>
  `
})
export class AppComponent implements OnInit {
  user?: User = undefined;

  ngOnInit() {
    try {
      this.user = getStoredLoggedInUser();
    } catch (e) {
      console.warn('No logged-in User found, serving LoginForm');
    }
  }

  onLoginSuccess(user: User) {
    this.user = user;
  }
}
