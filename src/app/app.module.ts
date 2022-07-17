import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { KnowledgeSharingHighlightDirective } from './knowledge-sharing-highlight.directive';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { KnowledgeSharingTempConvPipe } from './knowledge-sharing-temp-conv.pipe';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ErrorComponent } from './error/error.component';
import { TableModule } from 'primeng/table';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http'; 
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider'; 
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AngularDirectivesComponent,
    KnowledgeSharingHighlightDirective,
    AngularPipesComponent,
    KnowledgeSharingTempConvPipe,
    UserListComponent,
    AddUserComponent,
    NavigationBarComponent,
    ErrorComponent,
    TemplatedrivenformComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     // BrowserAnimations Modules 
     BrowserAnimationsModule,
     //  PrimeNG  Modules
     TableModule,
    ButtonModule,
    CalendarModule,
    SliderModule,
    DialogModule,
     //  Angular Form Modules
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
