import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoggerService{
  logger(message: unknown){
    console.log(message);
  }

}
