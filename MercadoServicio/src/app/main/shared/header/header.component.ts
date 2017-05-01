import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }


}
