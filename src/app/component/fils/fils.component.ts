import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() myfavoritecolor ='pink';
  @Input() message='';
  @Output() sendtopapa = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  emitevent(){
    this.sendtopapa.emit({
      message : this.message,
      fc :this.myfavoritecolor
    });
  }
  sendcolor(){
    this.sendtopapa.emit();
  }

}
