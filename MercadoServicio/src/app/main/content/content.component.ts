import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-content',
  template: `
  <ms-topnav></ms-topnav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./content.component.scss'],
})

export class ContentComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() { }

}


