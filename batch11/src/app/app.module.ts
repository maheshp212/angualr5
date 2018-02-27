import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { Ng2SmartTableModule } from 'ng2-smart-table';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { FormscontComponent } from './formscont/formscont.component';
import { AttrDirectiveDirective } from './attr-directive.directive';
import { ClassDirectiveDirective } from './class-directive.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { ApisComponent } from './apis/apis.component';
import { HomeComponent } from './home/home.component';
import { PageNotFooundComponent } from './page-not-foound/page-not-foound.component';

const rout:Routes = [
  {path:'', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'forms', component:FormsComponent},
  {path:'forms-cont', component:FormscontComponent},
  {path:'life-cycle', component:LifecycleComponent},
  {path:'pipes/:id/:cat', component:PipesComponent},
  {path:'apis', component:ApisComponent},
  {path:'**', component:PageNotFooundComponent},
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
    ClassDirectiveDirective,
    LifecycleComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    ApisComponent,
    HomeComponent,
    PageNotFooundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout),
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
