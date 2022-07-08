import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeService } from './recipe-book/recipe/recipe.service';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [RecipeBookComponent],
  providers: [RecipeService],
})
export class RecipeBookModule {}
