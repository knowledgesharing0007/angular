Example of Datepipe

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    template:`<p>medium : {{toDate | date:'medium'}} </p>
              <p>short : {{toDate | date:'short'}} </p>
              <p>fullDate : {{toDate | date:'fullDate'}} </p>
              <p>longDate : {{toDate | date:'longDate'}} </p>
              <p>mediumDate : {{toDate | date:'mediumDate'}} </p>
              <p>shortDate : {{toDate | date:'shortDate'}} </p>
              <p>mediumTime : {{toDate | date:'mediumTime'}} </p>
              <p>dd-MM-y : {{toDate | date:'dd-MM-y'}} </p>
              <p>dd-MM-yy HH:mm : {{toDate | date:'dd-MM-yy HH:mm'}} </p>`
})
export class AppComponent
{
    title: string = 'Angular pipes Example' ;
    toDate: Date = new Date();
}
 

 UpperCasePipe & LowerCasePipe
 import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
    selector: 'app-root',
    template:`<p>Unformatted :{{msg}} </p>
              <p>Uppercase :{{msg | uppercase}} </p>
              <p>Lowercase :{{msg | lowercase}} </p>`
})
export class AppComponent
{
    title: string = 'Angular pipes Example' ;
    msg: string= 'Welcome to Angular';
}

 SlicePipe
 import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    template:`<p>Complete String :{{msg}} </p>
              <p>Example 1 :{{msg | slice:11:20}} </p>
              <p>Example 2 :{{msg | slice:-9}} </p>`
})
 
export class AppComponent
{
    title: string = 'Angular pipes Example' ;
    msg: string= 'Welcome to Angular ';
}
 

 DecimalPipe / NumberPipe
 import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    template: `<p> Unformatted :{{num}}</p>
               <p> Formatted :{{num | number}}</p>
               <p> Formatted :{{num | number:'3.1-2'}}</p>
               <p> Formatted :{{num | number:'7.1-5'}} </p>`
})
 
export class AppComponent
{
    title: string = 'Angular pipes Example' ;
    num: number= 9542.14554;
}
 PercentePipe
 import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
    selector: 'app-root',
    template:`<p>Unformatted :{{per}} </p>
              <p>Example 1 :{{per | percent }} </p>
              <p>Example 2 :{{per | percent:'1.2-2'}} </p>`
})
export class AppComponent
{
    title: string = 'Angular pipes Example' ;
    per: number= .7414;2';
}

CurrencyPipe
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    template: `<p>Unformatted :{{cur}} </p>
               <p>Example 1 :{{cur | currency }} </p>
               <p>Example 2 :{{cur | currency:'INR':true:'4.2-2'}} </p>`
})
 
export class AppComponent
{
    title: string = 'Angular pipes Example' ;
    cur: number= 175;
}
 