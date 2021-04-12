import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { LoggerService } from 'src/app/services/logger.service';
import { TodoService } from 'src/app/todo/sevices/todo.service';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedcv : Cv=new Cv;
  date = new Date();

  constructor(
     private loggerservice : LoggerService,
     private helperservice : HelperService,
     private todoservice : TodoService
  ) { }

  ngOnInit(): void {
    this.helperservice.WhoIam();
    this.loggerservice.logger('cc je suis le cvcompn');
  }
  findselectedcv(selectedcv:Cv){
    this.selectedcv =selectedcv;
    this.todoservice.logger();

  }

}
