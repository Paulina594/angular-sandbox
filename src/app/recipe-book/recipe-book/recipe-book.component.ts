import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe-list/recipe.model';
import { RecipeService } from './recipe/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: RecipeModel) => {
      this.selectedRecipe = recipe;
    });
  }
}
