import { Component, OnInit } from '@angular/core';
import { article, Client, ClientService } from '@charpster/shared-lib';
import {Subject,takeUntil} from 'rxjs';

@Component({
  selector: 'charpster-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor( private _articleService: ClientService) {}

  articles : article[]=[];
  clients:Client[] = [];
  endsub$ : Subject<any> = new Subject();

  ngOnInit(): void {
    this._getClients();
  }


  private _getClients(): void {
    this._articleService.allClient().pipe(takeUntil(this.endsub$)).subscribe(items=>{
      this.clients = items;
    })
  }

  deleteArticle(id:string){
    this._articleService.deleteArticle(id).pipe(takeUntil(this.endsub$)).subscribe(data=>{
      console.log(data);
      this._getClients();
    })
  }
}
