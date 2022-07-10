import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeService } from './recipe-book/recipe/recipe.service';
import {AppRouterModule} from "../app-router.module";
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [CommonModule, SharedModule, AppRouterModule],
  exports: [RecipeBookComponent],
  providers: [RecipeService],
})
export class RecipeBookModule {}
