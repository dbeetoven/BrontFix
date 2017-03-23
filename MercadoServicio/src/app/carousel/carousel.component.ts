import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public myInterval: number = 1500;
  public slides: any[] = [];
  public slideIndex: number;
  index: number = 0;
  // imgUrl: Array<any> = [
	// 	`assets/images/slider1.jpg`,
	// 	`assets/images/slider2.jpg`,
	// 	`assets/images/slider3.jpg`,
	// 	`assets/images/slider0.jpg`
	// ];
 public constructor() { 
    for (let i=0; i<=4; i ++){
      this.addSlide;
    }
  }
  public addSlide(): void {
    this.slides.push({
      image: `assets/images/${ this.slides.length % 8 + 1 }.jpg`
    });
  }

ngOnInit() {
  }

}
