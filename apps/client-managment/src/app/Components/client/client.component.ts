import { Component, OnDestroy, OnInit } from '@angular/core';
import { Client, ClientService, ManagerService } from '@charpster/shared-lib';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'charpster-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit ,OnDestroy{

  clients : Client[]=[];
  constructor(private clientService:ClientService) {}

  endsub$ : Subject<any> = new Subject();
  ngOnInit(): void {
    this._getClients();
  }
  ngOnDestroy(): void {
      this.endsub$.next;
      this.endsub$.complete();
  }

  private _getClients(): void {
    this.clientService.allClient().pipe(takeUntil(this.endsub$)).subscribe(items=>{
      this.clients = items;
    })
  }

  deleteClient(id:string){
    this.clientService.deleteClient(id).pipe(takeUntil(this.endsub$)).subscribe(data=>{
      console.log(data);
      this._getClients();
    })
  }
}
