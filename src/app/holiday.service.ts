import { Injectable } from '@angular/core';

import { Http , Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 

@Injectable() 
export class HolidayService { 
   private _url='https://holidayapi.com/v1/holidays?key=1629dc21-9a8f-4c75-94c8-4adf82aabe6e&country=US&year=2015'; 
    public holidaysList = {};
    public holidaysKeys:string[] = [];
   constructor(private _http: Http){} 
   getHolidays():Observable<any>{ 
    return this._http.get(this._url) 
      .map((response: Response) => response.json().holidays) 
      .do(data => this.generateKeys(data)); 
   }
   generateKeys(data: any){
       this.holidaysList = data.holidays;       
        for(let key in this.holidaysList)
            this.holidaysKeys.push(key)
        return this.holidaysKeys;
   }
} 