import { Component } from '@angular/core';

@Component({
  selector: 'user-menu',
  standalone: true,
  template: `
      <div class="left-menu" id="leftMenu">
          MENU
          <ul class="ul-menu">
              <li class="li-menu" id="li-ingred">Ingredients</li>
              <li class="li-menu" id="li-recipes">Recipes</li>
          </ul>
      </div>
  `,
})
export class UserMenuComponent {

}
