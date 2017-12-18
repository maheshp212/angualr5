import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { AttrDirectiveDirective } from './attr-directive.directive';
import { ClasssDirective } from './classs.directive';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'varibales', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'forms', component:FormsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent,
    VariablesComponent,
    DirectivesComponent,
    FormsComponent,
    AttrDirectiveDirective,
    ClasssDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
