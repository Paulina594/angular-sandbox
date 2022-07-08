import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingListService.ingredients$.subscribe(
      (ingredients: IngredientModel[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientAdded(ingredient: IngredientModel) {
    return this.shoppingListService.addIngredient(ingredient);
  }
}
