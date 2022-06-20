import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { WelcomeFormComponent } from './components/welcome-form/welcome-form.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},

  {path: 'welcome', component: WelcomeFormComponent, pathMatch: 'full'},
  {path: 'posts', component: PostsComponent, pathMatch: 'full'},
  {path: 'users', component: UsersComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
