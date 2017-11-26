import { Injectable } from '@angular/core';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
//recipeSelected = new EventEmitter<Recipe>();
recipesChanged = new Subject<Recipe[]>();

private recipes: Recipe[] = [
	new Recipe('Pasta',
	 'Italiano ferro!',
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBumLitPhpQWfRxFGuEgXxEzgnHbkvhcViMikPoRovBIDOYvkk",
	  [ new Ingredient('Meat', 3),
	  	new Ingredient('Potato', 12)
	  ]),
	new Recipe('Hamburger',
	 'American fast food!',
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBumLitPhpQWfRxFGuEgXxEzgnHbkvhcViMikPoRovBIDOYvkk",
	  [ new Ingredient('Salo', 5),
	  	new Ingredient('Cheaken', 3)
	  ])
		];

  constructor(private shoppingListService: ShoppingListService) { }

setRecipes(recipes: Recipe[]) {
	this.recipes = recipes;
	this.recipesChanged.next(this.recipes.slice());
}

getRecipes() {
	return this.recipes.slice();
}

getRecipe(index: number) {
	return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[]) {
	this.shoppingListService.addIngredients(ingredients);
}

addRecipe(recipe: Recipe) {
	this.recipes.push(recipe);
	this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe) {
	this.recipes[index] = newRecipe;
	this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index: number) {
	this.recipes.splice(index, 1);
	this.recipesChanged.next(this.recipes.slice());
}

}
