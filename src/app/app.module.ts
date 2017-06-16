import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';  
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes } from '@angular/router'; 
import { MaterialModule,MdListModule } from '@angular/material';

import { AppComponent }  from './app.component';  
import { HolidaysComponent } from './holidays.component' 
import { HolidayDetailsComponent } from './holidayDetails.component' 


const appRoutes: Routes = [ 
   { path: 'Index', component: HolidaysComponent }, 
   { path: 'Details/:date', component: HolidayDetailsComponent }, 
   { path: '', redirectTo: '/Index', pathMatch: 'full'},
];  

@NgModule({
 imports: [ 
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpModule, 
      MaterialModule, MdListModule
      // BrowserAnimationsModule
    ], 
   declarations: [AppComponent, HolidaysComponent,HolidayDetailsComponent], 
   providers: [],
   bootstrap: [AppComponent] 
}) 
export class AppModule { } 