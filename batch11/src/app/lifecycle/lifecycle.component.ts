import { Component,
 OnInit,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
   } from '@angular/core';

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
  ngOnInit() {
    console.log('ngOnInit invoked');
  }
  ngDoCheck(){
    // if any small change happens this will trigger
    console.log('ngDocheck invoked');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit invoked');
  }
  ngAfterContentChecked(){
    // if any small change happens this will trigger
    console.log(' ngAfterContentChecked invoked');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit invoked');
  }
  ngAfterViewChecked(){
    // if any small change happens this will trigger
    console.log('ngAfterViewChecked invoked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy invoked');
  }
}
