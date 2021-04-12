import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() cv: any=null;
  @Input() size =50;
  @Input() isDiv = true;
  @Output() selectPersonne =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  selectitem(){
this.selectPersonne.emit(this.cv);
  }

}
