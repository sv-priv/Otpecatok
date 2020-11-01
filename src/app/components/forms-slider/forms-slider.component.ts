import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-forms-slider',
  templateUrl: './forms-slider.component.html',
  styleUrls: ['./forms-slider.component.css']
})
export class FormsSliderComponent implements OnInit {

  simpleSlider = 40;
  doubleSlider = [20, 60];
  state_default: boolean = true;
  focus: any;
  constructor() {

   }

  ngOnInit(): void {
  }

}
