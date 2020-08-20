import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipeslist : Recipe[] = [
        new Recipe('Chicken briyani1', 'South Indian TraditionalCusine', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/ambur-biryani.jpg'),
        new Recipe('Chicken briyani2', 'South Indian Traditional Cusine', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/ambur-biryani.jpg'),
        new Recipe('Chicken briyani3', 'South Indian Traditional Cusine', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/ambur-biryani.jpg')
          ];


 getRecipes() {
     return this.recipeslist.slice();
 }

}