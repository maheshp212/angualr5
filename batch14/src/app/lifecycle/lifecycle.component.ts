import { Component,
  OnInit,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,
                                DoCheck,
                                AfterContentInit,
                                AfterContentChecked,
                                AfterViewInit,
                                AfterViewChecked,
                                OnDestroy {
  constructor() { }
  ngOnInit() { // on initlizing the component
      console.log('ngOnInit')
  }
  ngOnDestroy(){ // on leaving the component
      console.log('ngOnDestroy')
  }
  ngDoCheck(){ // it will be triggered for every small change
      console.log('ngDoCheck')
  }
  ngAfterViewInit(){ // when view is being intialized
      console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){ // it will be triggered for every small change
      console.log('ngAfterViewChecked')
  }
  ngAfterContentInit(){ // when content / variables / feilds are initalized
      console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){ // it will be triggered for every small change
      console.log('ngAfterContentChecked')
  }
}
