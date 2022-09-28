import { Component, OnInit ,OnDestroy} from '@angular/core';
import { article, Client, ClientService } from '@charpster/shared-lib';
import {Subject, takeUntil} from 'rxjs';
@Component({
  selector: 'charpster-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit ,OnDestroy {
  constructor(private client:ClientService) {}
  clientdata: Client = {};
  copydata: Client = {};
  endsub$ : Subject<any> = new Subject();
  st=false;
  aid="";
  comment="";
  ngOnInit(): void {
    this._setC();
  }

  ngOnDestroy(): void {
      this.endsub$.next;
      this.endsub$.complete();
  }

  private _getClient(){
    if(this.clientdata._id)
    this.client.oneClient(this.clientdata._id).pipe(takeUntil(this.endsub$)).subscribe(client =>{
      this.clientdata = client;
      localStorage.setItem('udata',JSON.stringify(client));
    })
  }

  private _setC(){
    const c = localStorage.getItem('udata');
    if(c) {
      const jsonc = JSON.parse(c);
      this.clientdata = jsonc[0];
      this.copydata = jsonc[0];
    }
  }

  setStatusToYes(id:string){
    const data:article={
      status:true,
    };
    console.log(id);
    this.client.changeArticleStatus(id,data).pipe(takeUntil(this.endsub$)).subscribe(() =>{
      this._getClient();
    })
  }

  setStatusToNo(){
    const data:article={
      status:false,
      comment:this.comment
    };
    this.client.changeArticleStatus(this.aid,data).pipe(takeUntil(this.endsub$)).subscribe(() =>{
      this._getClient();
    })
  }

  setarticleid(id:string){
    this.aid=id;
  }

}
