import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 pageTitle : string = "Welcome to knowledge sharing angular tutorials";
 interpolation : string = "Interpolation";
 getCurrentDatetime() : Date{
    return new Date(); 
}
propertyBinding : string = "Property Binding update";
isDisabled : Boolean = true;
hasError() {
  return false
 }

 attributeBinding : string = "Attribute Binding Example";
 clickCount : number = 0;
  clickMe(){
    this.clickCount++;
  }

  modelvalue :string = "";
  
  clearValue() {
    this.modelvalue="";
  }
 constructor() { }

  ngOnInit(): void {
  }
  
}
