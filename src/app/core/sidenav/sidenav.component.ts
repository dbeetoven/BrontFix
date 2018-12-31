import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public showMenu: string;
  constructor() {}

  ngOnInit() {
      this.showMenu = '';
  }

  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }
  }
}
