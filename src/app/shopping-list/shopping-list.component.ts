import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Flour', 5),
    new Ingredient('Eggs', 10),
  ];
  ingToList(evt) {
    this.ingredients.push(
      new Ingredient(evt.name, evt.amount)
    )
  }
  constructor() { }

  ngOnInit() {
  }

}
