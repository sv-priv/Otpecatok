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
  map = new Map([["dizel", "Дизел"], ["benzin", "Бензин"]])
  @Output() eventClick = new EventEmitter();

  constructor(private service: AppService) { }



  ngOnInit(): void {
    this.transportForm = new FormGroup({
      kola: new FormGroup ({
        ima: new FormControl(this.isChecked),
        nafta: new FormControl(''),
        godina: new FormControl(2000)
      }),
      distanca: new FormGroup ({
        avtomobil: new FormControl(0),
        velosiped: new FormControl(0),
        avtobus: new FormControl(0),
        motor: new FormControl(0)
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