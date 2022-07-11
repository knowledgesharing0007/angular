import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { AddUserComponent } from './add-user/add-user.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { ErrorComponent } from './error/error.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { UserListComponent } from './user-list/user-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  { path: 'user', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:id', component: AddUserComponent },
  { path: 'pipes', component: AngularPipesComponent },
  { path: 'directives', component: AngularDirectivesComponent },
  { path: 'templatedrivenform', component: TemplatedrivenformComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
