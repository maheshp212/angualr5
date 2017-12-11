import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
   } from '@angular/core';

@Component({
  selector: 'app-lifcycles',
  templateUrl: './lifcycles.component.html',
  styleUrls: ['./lifcycles.component.css']
})
export class LifcyclesComponent implements OnInit, OnChanges, DoCheck,
AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  settings = {
            columns: {
              id: {
                title: 'ID'
              },
              name: {
                title: 'Full Name'
              },
              username: {
                title: 'User Name'
              },
              email: {
                title: 'Email'
              }
            }
          };
  data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },

  // ... list of items

  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];

  constructor() { }

  ngOnChanges(){
    console.log('ngOnchanges')
  }

  ngOnInit() {
    console.log('ngoninit');
  }

  /* It will be triggred for every change*/
  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  /* It will be triggred for every change*/
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  /* It will be triggred for every change*/
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
