import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomAge'
})
export class RandomAgePipe implements PipeTransform {

  transform(value: number, min: number =1 ,max: number =100 ): unknown {
    return Math.round(Math.random() * (max - min) + min) ;
  }

}
