import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Blueberry Muffin', 'Tasty and delicious', 'https://c1.staticflickr.com/8/7136/7590898848_97bcbf7f27_b.jpg'),
    new Recipe('Chocolate Muffin', 'Sweet and decadent', 'https://c1.staticflickr.com/7/6084/6110545140_cc2d3d091b_b.jpg')
  ];

  @Output() selectRecipeEvt = new EventEmitter<Recipe>();

  constructor() { }

  onRecipeSelect(recipe: Recipe) {
    this.selectRecipeEvt.emit(recipe);
  }

  ngOnInit() {
    this.selectRecipeEvt.emit(this.recipes[0]);
  }

}
