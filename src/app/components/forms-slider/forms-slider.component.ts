import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-forms-slider',
  templateUrl: './forms-slider.component.html',
  styleUrls: ['./forms-slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class FormsSliderComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
  }

}
