import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  constructor() { }

  ngOnInit(): void {
  }

}
