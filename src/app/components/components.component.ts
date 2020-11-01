import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    page = 4;
    flag ;
    flagFinal;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer2) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
      this.flag = 0
      this.flagFinal=0

        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }



  handleEventClicked(data){
    this.flag = data
    console.log(this.flag)
  }

  handleEventClicked2(data){
    this.flag = data
    console.log("kek" + this.flag)
  }

  handleEventClicked3(data){
    this.flag = data
    console.log("kekek" + this.flag)
  }

  handleEventClicked4(data){
    this.flag = data
    console.log("eoooo" + this.flag)
    this.flagFinal =1;
  }

  handleEventClicked5(data){
    this.flag = data
    console.log("end" + this.flag)
  }

}
