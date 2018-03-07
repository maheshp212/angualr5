import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormStatesComponent } from './form-states/form-states.component';
import { FormsComponent } from './forms/forms.component';
import { AttrDirective } from './attr.directive';
import { ApisComponent } from './apis/apis.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes:Routes = [
  {path:'', component:HomeComponent},
  {path:'intro/:id/:fname', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'form-states', component:FormStatesComponent},
  {path:'forms', component:FormsComponent},
  {path:'apis', component:ApisComponent},
  {path:'view-user/:id', component:ViewUserComponent},
  {path:'**', component:NotfoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    FormStatesComponent,
    FormsComponent,
    AttrDirective,
    ApisComponent,
    HomeComponent,
    NotfoundComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
