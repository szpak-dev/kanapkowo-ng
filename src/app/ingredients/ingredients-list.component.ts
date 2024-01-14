import { Component } from '@angular/core';

@Component({
  selector: 'ingredients-list',
  standalone: true,
  template: `
    <ul>
        @for (ingredient of ingredients; track ingredient.id) {
          <li>{{ingredient.name}}</li>
        }
    </ul>
  `,
})
export class IngredientsListComponent {
  ingredients = [
    {id: 1, name: 'Bread'},
    {id: 2, name: 'Bread-less'},
  ];
}
