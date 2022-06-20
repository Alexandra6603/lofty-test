import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import {ButtonModule} from 'primeng/button';
import { PostsModule } from './components/posts/posts.module';
import { Router } from '@angular/router';
import { WelcomeModule } from './components/welcome-form/welcome.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './components/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    //PostsComponent,
    //UsersComponent,
    //WelcomeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    WelcomeModule,
    HttpClientModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {
// implements DoBootstrap {
  // constructor(private readonly injector: Injector, private readonly router: Router, private readonly applicationRef: ApplicationRef) {
  // }

  //   ngDoBootstrap(): void {
  //   WebComponentModule.doBootstrap({
  //     injector: this.injector,
  //     router: this.router,
  //     applicationRef: this.applicationRef,
  //     component: AppComponent,
  //   });
  // }
}


