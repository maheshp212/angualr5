import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {IntroComponent} from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { TestPipe } from './test.pipe';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';


const routes:Routes = [
  {path:'intro', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'dirct', component:DirectivesComponent},
  {path:'forms', component:FormsComponent},
  {path:'pipes', component:PipesComponent},
  {path:'life', component:LifecycleComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    FormsComponent,
    PipesComponent,
    HexaPipe,
    TestPipe,
    AttrDirective,
    ClassDirective,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
