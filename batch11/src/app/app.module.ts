import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { FormscontComponent } from './formscont/formscont.component';
import { AttrDirectiveDirective } from './attr-directive.directive';
import { ClassDirectiveDirective } from './class-directive.directive';

const rout:Routes = [
  {path:'intro', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'forms', component:FormsComponent},
  {path:'forms-cont', component:FormscontComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    FormsComponent,
    FormscontComponent,
    AttrDirectiveDirective,
    ClassDirectiveDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
