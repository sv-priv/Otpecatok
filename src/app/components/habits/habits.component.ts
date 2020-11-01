import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../../shared/app.service';
@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {

  habitsForm: FormGroup
  gridsize: number;
  @Output() eventClick = new EventEmitter();

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.habitsForm = new FormGroup({
      avionPatuvanja: new FormControl(),
      obleka: new FormGroup ({
        patiki: new FormControl(),
        maica: new FormControl(),
        jakna: new FormControl(),
        pantaloni: new FormControl()
    }),
    gjubre: new FormControl()
    })
  }

  saveHabitsForm(){
    console.log(this.habitsForm.value)
    this.service.setHabits(this.habitsForm.value)
    this.eventClick.emit(4)
  }

  updateSetting(event) {
    this.gridsize = event.value;
  }

}