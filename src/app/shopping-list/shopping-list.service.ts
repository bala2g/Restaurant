import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
   private ingredients : Ingredient[]= [new Ingredient('Onion',5),new Ingredient('Tomato',2)];

   getIngredients() {
       return this.ingredients.slice();
   }

   addIngredients(ingredient : Ingredient) {
       this.ingredients.push(ingredient);

   }
}