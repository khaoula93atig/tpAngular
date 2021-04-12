import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  cvs: Cv[] =[];
  constructor() {
    this.cvs=[
      new Cv(1,'khaoula','atig','etudiante','cv.png',12345678,27),
      new Cv(2,'roua','atig','etudiante','cv.png',987456,30),
      new Cv(3,'ali','atig','etudiant','rotating_card_profile2.png',987456,30)
    ];
  } getCvs():Cv[]{
    return this.cvs;
  }

}
