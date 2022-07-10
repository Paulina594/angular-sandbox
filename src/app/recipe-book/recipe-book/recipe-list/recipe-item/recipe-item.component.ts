import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Input() index: number;
  // @Output() recipeClick = new EventEmitter<void>();

  // constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
