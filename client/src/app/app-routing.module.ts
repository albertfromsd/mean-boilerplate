import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserTableComponent } from './views/user-table/user-table.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
