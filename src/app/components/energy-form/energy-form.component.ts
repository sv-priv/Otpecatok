import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-form',
  templateUrl: './energy-form.component.html',
  styleUrls: ['./energy-form.component.css']
})
export class EnergyFormComponent implements OnInit {

  isEnergy: Number;


  constructor() { }

  ngOnInit(): void {
    this.isEnergy = 1;

  }


}
