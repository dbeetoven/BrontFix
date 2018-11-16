import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];

  constructor() {
    this.sliders.push({
        imagePath: 'assets/images/slider1.jpg',
        label: 'Publicar un aviso',
        text: 'Publicar un servivio que desea adquirir solucion'
    }, {
        imagePath: 'assets/images/slider2.jpg',
        label: 'Cargo mi perfil',
        text: 'Recibir aviso de servicios relacionados a tu perfil'
    }, {
        imagePath: 'assets/images/slider3.jpg',
        label: 'Buscar profesional',
        text: 'Encontrar al profesional indicado para resolver su problema.'
    });

    this.alerts.push({
        id: 1,
        type: 'success',
        message: `Servicio garantizado, rapido, calificado`
    }, {
        id: 2,
        type: 'warning',
        message: `No te quedes con las dudas, contactenos ahora mismo, te ayudaremos`
    });
}

ngOnInit() {
}

public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}

}




