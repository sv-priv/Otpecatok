import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../../shared/app.service';
import { Energy } from '../../shared/model'

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnInit {

  constructor(private service: AppService) { }
  isEnergy = 0;
  energyForm: FormGroup;
  @Output() eventClick = new EventEmitter();

  ngOnInit(): void {
    this.energyForm = new FormGroup({
      potrosuvacka:  new FormGroup({
        struja: new FormControl(),
        parno: new FormControl(),
        nafta: new FormControl(),
        paleti: new FormControl(),
        drva: new FormControl()
      }),
      lugjeDomakinstvo: new FormControl()
    })
  }

  saveEnergyForm(){
    console.log(this.energyForm.value)
    this.service.setEnergy(this.energyForm.value)
    this.eventClick.emit(1)
  }

}