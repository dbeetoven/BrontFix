import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ms-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  //   if (this.router.url === '/') {
  //     this.router.navigate(['/']);
  // }
  }
}
