import { Component, OnDestroy, OnInit } from '@angular/core';
import {ClientService, Client } from '@charpster/shared-lib';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'charpster-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit,OnDestroy {

  endsub$:Subject<any> = new Subject();

  constructor(private clientService : ClientService) {}

  client:Client[] =[];

  ngOnInit(): void {
    this.getClient();
  }

  ngOnDestroy(): void {
      this.endsub$.next;
      this.endsub$.complete();
  }

  getClient(){
    this.clientService.allClient().pipe(takeUntil(this.endsub$)).subscribe(client =>{
      this.client = client;
      console.log(this.client);
    })
  }

}
