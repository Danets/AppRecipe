import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

	constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

	storeRecipes() {
		const token = this.authService.getToken();

		return this.http.put('https://valeron-bdc66.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
	}

getRecipes() {
	const token = this.authService.getToken();
	
	return this.http.get('https://valeron-bdc66.firebaseio.com/recipes.json?auth=' + token)
	.map(
		(response: Response) => {
			const recipes: Recipe[] = response.json();
			for(let recipe of recipes) {
				if (!recipe['ingredints']) {
					recipe['ingredints'] = [];
				}
			}
			return recipes;
		}
	)
	.subscribe(
		(recipes: Recipe[]) => {
			this.recipeService.setRecipes(recipes);
		} 
	);
}

}