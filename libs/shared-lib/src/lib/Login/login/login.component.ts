import { Component, OnInit,OnDestroy } from '@angular/core';
import { ClientService } from '../../Services/client.service';
import { ManagerService } from '../../Services/manager.service';
import {Subject,takeUntil} from 'rxjs';
import { Client } from '../../Models/Client';
import {Router} from '@angular/router';
import { manager } from '../../Models/manager';
@Component({
  selector: 'charpster-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit,OnDestroy {
  constructor(private client:ClientService,private manager:ManagerService,private router:Router) {}
  name="";
  password="";
  cdata:Client={};
  mdata:manager={};
  endsub$ : Subject<any> = new Subject();
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.endsub$.next;
    this.endsub$.complete();
  }

  submit() {
    if(this.name == "") {
      console.log(this.name,this.password);
      alert("name is required");
    }
    else if(this.name != "" && this.password == "" ){
      this.client.login(this.name).pipe(takeUntil(this.endsub$)).subscribe(data =>{
        this.cdata=data;
        localStorage.setItem("udata", JSON.stringify(this.cdata));
        this.router.navigate(['']);
      })
    }
    else{
      const data={
        email:this.name,
        password:this.password
      }
      this.manager.login(data).pipe(takeUntil(this.endsub$)).subscribe(data =>{
        this.mdata=data;
        localStorage.setItem("udata", JSON.stringify(this.mdata));
        this.router.navigate(['']);
      })
    }
  }

}
