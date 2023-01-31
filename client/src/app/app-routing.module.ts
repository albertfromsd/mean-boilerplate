import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserAppComponent } from './views/user-app/user-app.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
