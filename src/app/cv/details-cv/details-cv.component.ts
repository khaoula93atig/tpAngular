import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {
  cv :any ;
  idcv :any;


  constructor(
    private cvserve:CvService,
    private activatedRoute:ActivatedRoute,
    private router : Router,
    private toaster :ToastrService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.idcv=params.id;

      })
    this.cv=this.cvserve.getByID(this.idcv);

  }

  deleteCv(){
    this.cvserve.deleteCV(this.cv);
    this.router.navigate(['cv']);
    this.toaster.success('le cv est supprimé avec succeser');

  }

}
