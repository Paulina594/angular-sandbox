import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../../recipe/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Output() recipeClick = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
