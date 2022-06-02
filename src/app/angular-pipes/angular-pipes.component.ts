import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {

  toDate: Date = new Date();

  msg_lower: string= 'welcome to angular pipe session lowercase value';

  msg_upper: string= 'WELCOME TO ANGULAR PIPES SESSION UPPERCASE VALUE';

  num: number= 9542.14554;
  per: number= .7414;
  cur: number= 175;
  celcius: number = 0;
  Fahrenheit: number = 0;  
  constructor() { }

  ngOnInit(): void {
  }

}
