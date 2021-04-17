import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailComponent } from './cv/detail/detail.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { FirstComponent } from './first/first.component';
import { TodoComponent } from './todo/todo/todo.component';

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'cv', component: CvComponent},
  {path: 'color', component: ColorComponent},
  {path: 'word', component: MiniWordComponent},
  {path: 'detail/:id', component: DetailsCvComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
