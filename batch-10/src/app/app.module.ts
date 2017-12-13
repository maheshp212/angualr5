import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { VariablesComponent } from './variables/variables.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'varibales', component:VariablesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent,
    VariablesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
