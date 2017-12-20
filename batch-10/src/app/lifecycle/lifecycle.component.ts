import { Component,
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, DoCheck,
                              AfterContentInit, AfterContentChecked,
                              AfterViewInit, AfterViewChecked,
                              OnDestroy {



  constructor() { }
  ngOnInit() {
    console.log('ngOnInit')
  }

  // triggred frequentyly if any change occurs
  // try to avoid for the performance
  ngDoCheck(){
     console.log('ngDoCheck');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

    // triggred frequentyly if any change occurs
  // try to avoid for the performance
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(){
     console.log('ngAfterContentInit');
  }

  // triggred frequentyly if any change occurs
  // try to avoid for the performance
  ngAfterContentChecked(){
     console.log('ngAfterContentChecked');
  }



  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
