import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'



import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormStatesComponent } from './form-states/form-states.component';
import { FormsComponent } from './forms/forms.component';
import { AttrDirective } from './attr.directive';
import { ApisComponent } from './apis/apis.component';


const routes:Routes = [
  {path:'intro', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'form-states', component:FormStatesComponent},
  {path:'forms', component:FormsComponent},
  {path:'apis', component:ApisComponent},
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
    ApisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
