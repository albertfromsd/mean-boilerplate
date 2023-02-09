import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserAppComponent } from './views/user-app/user-app.component';
import { AlgoVisualViewComponent } from './views/algo-visual-view/algo-visual-view.component';
import { CountIslandsComponent } from './components/algo-visual-app/count-islands/count-islands.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserAppComponent},
  {path: 'algo-visual', component: AlgoVisualViewComponent,
    children: [
      { path: 'count-islands', component: CountIslandsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
