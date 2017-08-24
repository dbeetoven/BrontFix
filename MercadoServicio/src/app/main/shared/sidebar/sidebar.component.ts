import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'ms-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isActive = false;
  showMenu = '';

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  eventCalled() {
    this.isActive = !this.isActive;
  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  ngOnInit() { }
}








