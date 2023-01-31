// [ Native Modules ]
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// [ NgRx ]
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './store/user/user.reducer';
import { appReducer } from './store/app/app.reducer';

// [ Components/Views ]
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './views/home/home.component';
import { UserAppComponent } from './views/user-app/user-app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    HomeComponent,
    UserAppComponent,
    SearchbarComponent,
    FooterComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      user: userReducer,
      app: appReducer
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
