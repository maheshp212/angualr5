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
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'varibales', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'forms', component:FormsComponent},
  {path:'pipes', component:PipesComponent},
  {path:'lifecycle', component:LifecycleComponent},
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
    ClasssDirective,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    LifecycleComponent
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
