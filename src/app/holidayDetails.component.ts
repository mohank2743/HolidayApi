import { Component, OnInit}  from '@angular/core'; 
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Http , Response }          from '@angular/http'; 

import { Observable }               from 'rxjs/Observable'; 

import { HolidayService }           from './holiday.service'; 


import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/switchMap';

@Component ({ 
   selector: 'my-app',  
   templateUrl: './holidayDetail.html', 
   providers: [HolidayService] 
})

export   class   HolidayDetailsComponent implements OnInit  {  
  public HolidaysOnList:any[];
  public selectedHoliday:string = "";
    constructor(
        private _holiday: HolidayService,
        private _route: ActivatedRoute,
        private _location: Location
    ) {}

    ngOnInit(): void { 
        //  this._route.params
        //     .switchMap((params: Params) => this.selectedHoliday = params['id'])
        this.selectedHoliday = this._route.snapshot.params["date"]
        this._holiday.getHolidays().subscribe(data => {
            this.HolidaysOnList = data[this.selectedHoliday];
            console.log(this.HolidaysOnList);
        });   
   } 
   goBack(): void {
         this._location.back();
    }
}