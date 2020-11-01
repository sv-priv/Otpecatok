import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { DietResult, EnergyResult, HabitsResult, Statistika, TransportResult } from '../../shared/model';
import {Chart} from '../../../../node_modules/chart.js'


@Component({
  selector: 'app-result',
  // templateUrl: './result.component.html',
  template: `
  <p>result works!</p>

  <div id="divChar">
      <canvas id="myChart"></canvas>
  </div>

    <h2>{{statistika.brandNewCar2018}}</h2>
    <h2>{{statistika.reduceDoubleFoodWaste}}</h2>
    <h2>{{statistika.removeWoodPalets}}</h2>
    <h2 *ngIf="statistika.switchFromBusToBike != 0">{{statistika.switchFromBusToBike}}</h2>
    <h2>{{statistika.switchHalfCarForBus}}</h2>
    <h2>{{statistika.switchHalfFlightTime}}</h2>
    <h2>{{statistika.switchToVegetarian}}</h2>
    <h2>{{statistika.tenPercentLessWaste}}</h2>
    <h2>{{statistika.vkupno}}</h2>
    <h2>{{energijaRez.vkupno}}</h2>
    <h2>{{navikiRez.vkupno}}</h2>

  `,
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result
  energijaRez: EnergyResult
  hranaRez: DietResult
  transportRez: TransportResult
  navikiRez: HabitsResult
  statistika: Statistika

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.result = this.service.getResult()

    console.log(JSON.stringify(this.result))
    let rez = this.service.calculate(this.result)

    this.energijaRez = {
      drva : Math.round(rez.energija.drva),
      nafta : Math.round(rez.energija.nafta),
      paleti: Math.round(rez.energija.paleti),
      parno: Math.round(rez.energija.parno),
      struja: Math.round(rez.energija.struja),
      vkupno: Math.round(rez.energija.vkupno)
    }

    this.hranaRez = {
      dieta: Math.round(rez.hrana.dieta),
      frlanjeHrana: Math.round(rez.hrana.frlanjeHrana),
      vkupno: Math.round(rez.hrana.vkupno)
    }

    this.transportRez = {
      avtobus: Math.round(rez.transport.avtobus),
      avtomobil: Math.round(rez.transport.avtomobil),
      motor: Math.round(rez.transport.motor),
      velosiped: Math.round(rez.transport.velosiped),
      vkupno: Math.round(rez.transport.vkupno)
    }

    this.navikiRez = {
      avion: Math.round(rez.naviki.avion),
      gjubre: Math.round(rez.naviki.gjubre),
      obleka: Math.round(rez.naviki.obleka),
      vkupno: Math.round(rez.naviki.vkupno)
    }

    this.statistika = {
      brandNewCar2018: Math.round(rez.statistika.brandNewCar2018),
      reduceDoubleFoodWaste: Math.round(rez.statistika.reduceDoubleFoodWaste),
      removeWoodPalets: Math.round(rez.statistika.removeWoodPalets),
      switchFromBusToBike: Math.round(rez.statistika.switchFromBusToBike),
      switchHalfCarForBus: Math.round(rez.statistika.switchHalfCarForBus),
      switchHalfFlightTime: Math.round(rez.statistika.switchHalfFlightTime),
      switchToVegetarian: Math.round(rez.statistika.switchToVegetarian),
      tenPercentLessWaste: Math.round(rez.statistika.tenPercentLessWaste),
      vkupno: Math.round(rez.statistika.vkupno),
    }

    var myPieChart = new Chart("myChart", {
      type: 'pie',
      data: {
        datasets: [{
            data: [this.energijaRez.vkupno, this.hranaRez.vkupno, this.transportRez.vkupno, this.navikiRez.vkupno],
            backgroundColor: [
              'rgba(255, 106, 71, 1)',
              'rgba(255, 194, 35, 1)',
              'rgba(53, 106, 255, 1)',
              'rgba(0, 255, 52, 1)'

          ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Енергија',
            'Храна',
            'Транспорт',
            'Навики'
        ]
    },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
  }
}