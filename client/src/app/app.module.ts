import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './views/home/home.component';
import { userReducer } from './store/user/user.reducer';
import { UserTableComponent } from './views/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    HomeComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      user: userReducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'MEAN Boiler Plate',
      // logOnly value should be changed to false during production
      logOnly: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
