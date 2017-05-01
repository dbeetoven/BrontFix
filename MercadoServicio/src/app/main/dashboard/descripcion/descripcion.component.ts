import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FiredatabaseService } from '../../servicios/firedatabase.service';

@Component({
  selector: 'ms-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit {
  id:any;
  servicio:any;
  constructor(private firedata:FiredatabaseService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
     this.firedata.getDetalleServicio(this.id)
 return this.servicio;
}

}
