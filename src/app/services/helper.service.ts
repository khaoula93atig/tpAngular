import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private loggerservice: LoggerService) { }

  WhoIam(){
    this.loggerservice.logger('je suis le helper');
    
  }
}
