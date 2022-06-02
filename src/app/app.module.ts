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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AngularDirectivesComponent,
    KnowledgeSharingHighlightDirective,
    AngularPipesComponent,
    KnowledgeSharingTempConvPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AngularPipesComponent]
})
export class AppModule { }
