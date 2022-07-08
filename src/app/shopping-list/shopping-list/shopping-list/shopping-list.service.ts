import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from '../../../shared/ingredient.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private _ingredients = new BehaviorSubject<IngredientModel[]>([
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 2),
    new IngredientModel('Onions', 3),
    new IngredientModel('Potatoes', 7),
    new IngredientModel('Eggs', 4),
    new IngredientModel('Carrots', 1),
  ]);

  // dziala jak ingredients changed
  public readonly ingredients$ = this._ingredients.pipe();

  get ingredients(): IngredientModel[] {
    return this._ingredients.value;
  }

  constructor() {}

  addIngredient(ingredient: IngredientModel) {
    const newIngredients = this.ingredients.slice();
    newIngredients.push(ingredient);
    this._ingredients.next(newIngredients);
  }

  addIngredients(ingredients: IngredientModel[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
  }
}
