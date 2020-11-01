import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../../shared/app.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  isChecked = false;
  value = "";
  transportForm: FormGroup
  map = new Map([["dizel", "Дизел"], ["benzin", "Бензин"], ["gas", "Гас"], ["elektricen", "Електричен"], ["hybrid", "Хибрид"]])
  @Output() eventClick = new EventEmitter();

  constructor(private service: AppService) { }



  ngOnInit(): void {
    this.transportForm = new FormGroup({
      kola: new FormGroup ({
        ima: new FormControl(this.isChecked),
        nafta: new FormControl(''),
        godina: new FormControl(0)
      }),
      distanca: new FormGroup ({
        avtomobil: new FormControl(),
        velosiped: new FormControl(),
        avtobus: new FormControl(),
        motor: new FormControl()
    })
    })
  }

  saveTransportForm(){
    console.log(this.transportForm.value)
    this.service.setTransportation(this.transportForm.value)
    this.eventClick.emit(3)
  }

  changeType(e){

  }

}