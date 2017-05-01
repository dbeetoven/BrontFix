import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FiredatabaseService } from '../../servicios/firedatabase.service';

@Component({
  selector: 'ms-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  constructor(private firedata:FiredatabaseService, private router:Router,private route:ActivatedRoute) { }
 
  ngOnInit() {}
  }








