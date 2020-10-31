import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.result = this.service.getResult()
    console.log(this.result)
    console.log(JSON.stringify(this.result))
  }


}