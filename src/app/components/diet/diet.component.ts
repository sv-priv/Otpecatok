import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../../shared/app.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  constructor(private service: AppService) { }
  dietForm: FormGroup
  @Output() eventClick = new EventEmitter();
  gridsize: number;


  ngOnInit(): void {
    this.dietForm = new FormGroup({
      dieta:  new FormControl(''),
      frlanjeHrana: new FormControl('')
    })
  }

  saveDietForm(){

    console.log(this.dietForm.value)
    this.service.setDiet(this.dietForm.value)
    this.eventClick.emit(2)
  }

  updateSetting(event) {
    this.gridsize = event.value;
  }


}