import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';

import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() cv : Cv =new Cv;


  constructor(
    private embservice :EmbaucheService,
    private toastr:ToastrService,

  ) { }



  ngOnInit(): void {


  }

  embaucher(){
    if(this.embservice.embaucher(this.cv)){
      this.toastr.success(`felicitation ${this.cv.name} ${this.cv.firstname} a ete preselectionne`);
    }else{
      this.toastr.warning(` ${this.cv.name} ${this.cv.firstname} est deja preselectionne`);
    }
  }



}
