import { EventEmitter, Injectable } from '@angular/core';
import { RecipeModel } from '../recipe-list/recipe.model';
import { IngredientModel } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../../../shopping-list/shopping-list/shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Dodo',
      'Using a sharp knife, cut plantains into the shape and size of your choosing: ½-inch dice, ⅓-inch thick rounds, or ⅓-inch thick slices on the bias.',
      'https://www.seriouseats.com/thmb/_D67Ehl6VS-rbiAtsM2LIEkvf6I=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dodo-Recipe-Maureen-Celestine-Step-hero-b1b607e6503049aaa128df160569a261.JPG',
      [
        new IngredientModel('Rice', 3),
        new IngredientModel('Ice', 2),
        new IngredientModel('Carrot', 6),
        new IngredientModel('Grass', 8),
      ]
    ),
    new RecipeModel(
      'Wodo',
      'Using a sharp knife, cut plantains into the shape and size of your choosing: ½-inch dice, ⅓-inch thick rounds, or ⅓-inch thick slices on the bias.',
      'https://www.seriouseats.com/thmb/_D67Ehl6VS-rbiAtsM2LIEkvf6I=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dodo-Recipe-Maureen-Celestine-Step-hero-b1b607e6503049aaa128df160569a261.JPG',
      [
        new IngredientModel('Banana', 3),
        new IngredientModel('Mango', 2),
        new IngredientModel('Carrot', 6),
        new IngredientModel('Peas', 8),
      ]
    ),
    new RecipeModel(
      'Kodo',
      'Using a sharp knife, cut plantains into the shape and size of your choosing: ½-inch dice, ⅓-inch thick rounds, or ⅓-inch thick slices on the bias.',
      'https://www.seriouseats.com/thmb/_D67Ehl6VS-rbiAtsM2LIEkvf6I=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dodo-Recipe-Maureen-Celestine-Step-hero-b1b607e6503049aaa128df160569a261.JPG',
      [
        new IngredientModel('Cheese', 3),
        new IngredientModel('Grapes', 2),
        new IngredientModel('Strawberries', 6),
        new IngredientModel('Peas', 8),
      ]
    ),
    new RecipeModel(
      'Modo',
      'Using a sharp knife, cut plantains into the shape and size of your choosing: ½-inch dice, ⅓-inch thick rounds, or ⅓-inch thick slices on the bias.',
      'https://www.seriouseats.com/thmb/_D67Ehl6VS-rbiAtsM2LIEkvf6I=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dodo-Recipe-Maureen-Celestine-Step-hero-b1b607e6503049aaa128df160569a261.JPG',
      [
        new IngredientModel('Yogurt', 3),
        new IngredientModel('Vodka', 2),
        new IngredientModel('Pineapple', 6),
        new IngredientModel('Peas', 8),
      ]
    ),
    new RecipeModel(
      'Podo',
      'Using a sharp knife, cut plantains into the shape and size of your choosing: ½-inch dice, ⅓-inch thick rounds, or ⅓-inch thick slices on the bias.',
      'https://www.seriouseats.com/thmb/_D67Ehl6VS-rbiAtsM2LIEkvf6I=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dodo-Recipe-Maureen-Celestine-Step-hero-b1b607e6503049aaa128df160569a261.JPG',
      [
        new IngredientModel('Fries', 3),
        new IngredientModel('Lemons', 2),
        new IngredientModel('Cucumber', 6),
        new IngredientModel('Pie', 8),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
