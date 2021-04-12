import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  source : string | undefined;
  inputContent = '';
  isHidden = false;
  message =' je suis un message'
  constructor() { }

  ngOnInit(): void {

  }

  alerte() {
    alert('hello');

  }
  affichercacher(){
    this.isHidden=!this.isHidden;
  }

  ShowInputContent(element: any){
    this.inputContent=element;
  }

}
