import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embauchees: Cv[]=[];
  constructor() { }

  getEmbauche(): Cv[]{
    return this.embauchees;
  }

  embaucher(cv: Cv): Boolean{
    if(this.embauchees.some(actualCv => actualCv === cv)){
      return false;
    }else{
      this.embauchees.push(cv);
      return true;
    }

  }
}
