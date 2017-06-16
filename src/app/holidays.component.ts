import { Component, OnInit} from '@angular/core'; 
import { Router }           from '@angular/router';
import { Http , Response }  from '@angular/http'; 
import { HolidayService }   from './holiday.service'; 

import { Observable }       from 'rxjs/Observable'; 

import 'rxjs/add/operator/map';  

@Component ({ 
   selector: 'my-app',  
   templateUrl: './holidaysList.html', 
   providers: [HolidayService] 
})  

export   class   HolidaysComponent implements OnInit {  
  public holidaysList ={};
  public holidaysKeys:string[];
   constructor(
        private _holiday: HolidayService,
        private router: Router
      ){ } 
    ngOnInit(): void { 
        this._holiday.getHolidays().subscribe(data => {
            this.holidaysList = data;
            this.holidaysKeys = [];
            for(let key in this.holidaysList)
                this.holidaysKeys.push(key)
        });
   }
   gotoDetail(dt: string){
        this.router.navigate(['/Details/'+ dt]);
   }    
}