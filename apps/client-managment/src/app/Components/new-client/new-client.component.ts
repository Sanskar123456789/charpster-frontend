import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Client, ClientService } from '@charpster/shared-lib';
import {Subject,takeUntil} from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'charpster-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
})
export class NewClientComponent implements OnInit ,OnDestroy {
  endsub$ : Subject<any> = new Subject();
  constructor(private clientService:ClientService,private route:Router) {}
  name ="";
  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.endsub$.next;
    this.endsub$.complete();
  }

  submit(){
    if(this.name=="") {
      alert("name is required")
    }else{
      const data :Client ={
        name:this.name,
      }
      this.clientService.newClient(data).pipe(takeUntil(this.endsub$)).subscribe(client =>{
        console.log(client);
        this.route.navigateByUrl('/Client');
      })
    }
  }
}
