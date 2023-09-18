import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SnakeComponent} from "./pages/snake/snake.component";
import {DisplaySnakeComponent} from "./pages/display-snake/display-snake.component";
import {TestCountWssComponent} from "./pages/test-count-wss/test-count-wss.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/test' },
  { path: 'snake', component: SnakeComponent },
  { path: 'display-snake', component: DisplaySnakeComponent},
  { path: 'test', component: TestCountWssComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
