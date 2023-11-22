import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { UserListComponent } from './_components/user/user-list/user-list.component';
import { UserCreateComponent } from './_components/user/user-create/user-create.component';
import { UserUpdateComponent } from './_components/user/user-update/user-update.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'users/list', component:UserListComponent},
  {path: 'users/create', component:UserCreateComponent},
  {path: 'users/:id', component:UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
