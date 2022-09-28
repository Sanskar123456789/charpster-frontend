import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'charpster-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  cname="";
  ngOnInit(): void {
    this._setCname();
  }

  private _setCname(){
    const c = localStorage.getItem('udata');
    if(c) {
      const jsonc = JSON.parse(c);
      this.cname = jsonc[0].name;
    }

  }


}
