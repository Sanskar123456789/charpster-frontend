import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import {HeaderComponent} from './Components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService, SharedLibModule } from '@charpster/shared-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const route : Routes = [{
  path:'',
  canActivate:[AuthGuardService],
  component: HomePageComponent
}
]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomePageComponent,HeaderComponent],
  imports: [BrowserModule,RouterModule.forRoot(route),HttpClientModule,SharedLibModule,ReactiveFormsModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
