import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { article, Client, ClientService } from '@charpster/shared-lib';
import {Subject, takeUntil} from 'rxjs';
@Component({
  selector: 'charpster-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit,OnDestroy {
  link="";
  status=false;
  comment="";
  clientId="";
  clients: Client[] = [];
  endsub$ : Subject<any> = new Subject();
  Clientname="Select Client";
  constructor(private clientService:ClientService,private router:Router) {}

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
      console.log(items);
    })
  }

  submit(){
    let valid = true;
    if(this.link.length<10){
      alert("Link is required");
      valid = false;
    }

    if(this.comment==""){
      alert("Comment is required");
      valid = false
    }

    if(this.clientId==undefined){
      alert("Select Client");
      valid =false;
    }

    if(valid){
      const data:article = {
        link: this.link,
        status: this.status,
        comment: this.comment,
      }
      this.clientService.addArticle(this.clientId,data).pipe(takeUntil(this.endsub$)).subscribe(data =>{
        this.router.navigateByUrl('/Article');
      })
    }
  }

  statuschange(st:boolean):void {
    this.status=st;
  }

  setClient(client:string,name: string|undefined):void {
    this.clientId=client;
    if(name)
    this.Clientname= name;
  }
}
