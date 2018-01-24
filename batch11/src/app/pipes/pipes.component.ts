import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit,OnDestroy {

  fname:string;
  today: any;
  num:number;

id:any;
cat :any;
sub:any;
  constructor(private ActivatedRoute: ActivatedRoute) {
    this.fname = 'qShOrE'
    this.today = new Date();
    this.num = 23;
  }

  ngOnInit() {

     this.sub = this.ActivatedRoute.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.cat =params['cat']; // (+) converts string 'id' to a number
        });
  }

   ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
