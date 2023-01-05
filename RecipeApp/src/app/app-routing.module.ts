import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ReipeListComponent } from './reipe-list/reipe-list.component';

const routes: Routes = [
  {path:'recipelist', component: ReipeListComponent},
  {path:'newRecipe', component: AddRecipeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
