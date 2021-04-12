import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  messagetofils ='bonjour lala';
  constructor() { }

  ngOnInit(): void {
  }
  recievedatafromsun(message:object){
    console.log(message);
  }

}
