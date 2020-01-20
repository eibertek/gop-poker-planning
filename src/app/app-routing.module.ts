import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPokerPlanningComponent } from './new-poker-planning/new-poker-planning.component';


const routes: Routes = [
  { path: 'poker/new', component: NewPokerPlanningComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
