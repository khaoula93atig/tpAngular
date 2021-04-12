import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() defaultColer='blue';
  coler =this.defaultColer;
  constructor() { }

  ngOnInit(): void {
  }
   changeColor(newcoler :any){
     this.coler=newcoler;

   }
   recivecolor(){

   }

}
