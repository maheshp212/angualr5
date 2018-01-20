import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { VariablesComponent } from './variables/variables.component';
import { IntroComponent } from './intro/intro.component';
import {DirectivesComponent} from './directives/directives.component';
import { FormComponent } from './form/form.component';
import { AttrDirective } from './attr.directive';
import { ClasssDirective } from './classs.directive';
import { ElementdirComponent } from './elementdir/elementdir.component';
import { PipesComponent } from './pipes/pipes.component';
import { PowerPipe } from './power.pipe';
import { HexaPipe } from './hexa.pipe';
import { LifcyclesComponent } from './lifcycles/lifcycles.component';
import { ServicesComponent } from './services/services.component'

const routes:Routes = [
      { path: 'variables', component: VariablesComponent },
      { path: 'intro', component: IntroComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'form', component: FormComponent},
      { path: 'pipes', component: PipesComponent},
      { path: 'lifecycles', component: LifcyclesComponent},
      { path: 'services', component: ServicesComponent}
    ];
@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    IntroComponent,
    DirectivesComponent,
    FormComponent,
    AttrDirective,
    ClasssDirective,
    ElementdirComponent,
    PipesComponent,
    PowerPipe,
    HexaPipe,
    LifcyclesComponent,
    ServicesComponent
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
