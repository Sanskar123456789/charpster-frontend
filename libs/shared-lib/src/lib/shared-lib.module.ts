import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route ,Routes} from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
export const sharedLibRoutes: Route[] = [];
const routes : Routes =[
  {
    path:'Login',
    component:LoginComponent
  }
]
@NgModule({
  imports: [CommonModule, RouterModule,ReactiveFormsModule,FormsModule,RouterModule.forChild(routes),],
  declarations: [LoginComponent],
})
export class SharedLibModule {}
