import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { GridComponent } from './pages/grid/grid.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [

  {
    path:'',component:LayoutComponent,children: [
      {path:'',redirectTo:'grid',pathMatch: 'full'},
      {path:'task',component:TasksComponent},
      {path:'users',component:UsersComponent},
      {path:'grid',component:GridComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
