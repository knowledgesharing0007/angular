import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
