import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './Components/article/article.component';
import { ClientComponent } from './Components/client/client.component';
import { NewClientComponent } from './Components/new-client/new-client.component';
import { NewArticleComponent } from './Components/new-article/new-article.component';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AuthGuardService, SharedLibModule } from '@charpster/shared-lib';

const route: Routes = [
  {
    path:'',
    component:HomePageComponent,
    canActivate:[AuthGuardService],
  },
    {
      path: 'Article',
      component: ArticleComponent,
    },
    {
      path: 'Article/:id',
      component: NewArticleComponent,
      canActivate:[AuthGuardService],
    },
    {
      path: 'NewArticle',
      component: NewArticleComponent,
    },
    {
      path: 'Client',
      component: ClientComponent,
    },
    {
      path: 'Client/:id',
      component: NewClientComponent,
      canActivate:[AuthGuardService],
    },
    {
      path: 'NewClient',
      component: NewClientComponent,
      canActivate:[AuthGuardService],
    },


];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomePageComponent,
    HeaderComponent,
    ArticleComponent,
    ClientComponent,
    NewClientComponent,
    NewArticleComponent,
  ],
  imports: [HttpClientModule, ReactiveFormsModule,FormsModule,BrowserModule, RouterModule.forRoot(route),SharedLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
