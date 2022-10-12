import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TodocreateComponent } from './todo-create/todo-create.component';
import { TodoShowComponent } from './todo-show/todo-show.component';

const routes: Routes = [
 {path:'',component:MainComponent,
 children:[
  {path:"",redirectTo:"/todo",pathMatch:'full'},
  {path:"todo",component:TodoShowComponent},
  {path:"create",component:TodocreateComponent},
  
 ]}
,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
