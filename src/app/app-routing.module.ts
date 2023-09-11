import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SnakeComponent} from "./pages/snake/snake.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/snake' },
  { path: 'snake', component: SnakeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
