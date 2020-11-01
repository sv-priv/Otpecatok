import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { DietResult, EnergyResult, HabitsResult, Statistika, TransportResult } from '../../shared/model';
import {Chart} from '../../../../node_modules/chart.js'


@Component({
  selector: 'app-result',
  // templateUrl: './result.component.html',
  template: `
  <div class="container">
  <div class="row first">
      <div class="col-md-6">
        <div id="divChart">
          <canvas id="myChart"></canvas>
        </div>

      </div>
      <div class="col-md-6">
        <div id="divChart">
          <canvas id="myChart2"></canvas>
        </div>
      </div>
  </div>
  <div class="row second " style= "text-align:center">
      <h3>ВАШАТА ЕМИСИЈА НА ЈАГЛЕРОД ДИОКСИД ИЗНЕСУВА {{statistika.vkupno}} ТОНИ/ГОДИШНО</h3>
      <a [routerLink] ="['/methodology']" class="btn button btn-success ">Методологија</a>


  </div>
  <div class="row">
      <div class="col-md-4">
        <p *ngIf="statistika.brandNewCar2018 != 0">- Доколку купите ново возило, вашата емисија на CO2 ќе биде намалена за {{statistika.brandNewCar2018}}</p>
        <p *ngIf="statistika.reduceDoubleFoodWaste != 0">- Доколку двојно ја намалите количината на храна која ја исфрлате, вашата емисија на CO2 ќе биде намалена за {{statistika.reduceDoubleFoodWaste}}</p>
      </div>
      <div class="col-md-4">
        <p *ngIf="statistika.switchFromBusToBike != 0">- Доколку го замените користењето на автобус со велосипед, вашата емисија на CO2 ќе биде намалена за {{statistika.switchFromBusToBike}}</p>
        <p *ngIf="statistika.switchHalfFlightTime != 0">- Доколку го замените користењето на автомобил со автобус, вашата емисија на CO2 ќе биде намалена за {{statistika.switchHalfCarForBus}}</p>
      </div>
      <div class="col-md-4">
        <p *ngIf="statistika.switchHalfCarForBus != 0">- Доколку го намалите користењето на ави транспорт, вашата емисија на CO2 ќе биде намалена за {{statistika.switchHalfFlightTime}}</p>
        <p *ngIf="statistika.switchToVegetarian != 0">- Доколку се исхранувате како вегетаријанец, вашата емисија на CO2 ќе биде намалена за {{statistika.switchToVegetarian}}</p>
        <p *ngIf="statistika.tenPercentLessWaste != 0">- Доколку го намалите отпадот кој го фрлата, вашата емисија на CO2 ќе биде намалена за {{statistika.tenPercentLessWaste}}</p>
      </div>

  </div>
</div>

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
      drva : Math.round(rez.energija.drva)/1000,
      nafta : Math.round(rez.energija.nafta)/1000,
      paleti: Math.round(rez.energija.paleti)/1000,
      parno: Math.round(rez.energija.parno)/1000,
      struja: Math.round(rez.energija.struja)/1000,
      vkupno: Math.round(rez.energija.vkupno)/1000
    }

    this.hranaRez = {
      dieta: Math.round(rez.hrana.dieta)/1000,
      frlanjeHrana: Math.round(rez.hrana.frlanjeHrana)/1000,
      vkupno: Math.round(rez.hrana.vkupno)/1000
    }

    this.transportRez = {
      avtobus: Math.round(rez.transport.avtobus)/1000,
      avtomobil: Math.round(rez.transport.avtomobil)/1000,
      motor: Math.round(rez.transport.motor)/1000,
      velosiped: Math.round(rez.transport.velosiped)/1000,
      vkupno: Math.round(rez.transport.vkupno)/1000
    }

    this.navikiRez = {
      avion: Math.round(rez.naviki.avion)/1000,
      gjubre: Math.round(rez.naviki.gjubre)/1000,
      obleka: Math.round(rez.naviki.obleka)/1000,
      vkupno: Math.round(rez.naviki.vkupno)/1000
    }

    this.statistika = {
      brandNewCar2018: Math.round(rez.statistika.brandNewCar2018)/1000,
      reduceDoubleFoodWaste: Math.round(rez.statistika.reduceDoubleFoodWaste)/1000,
      removeWoodPalets: Math.round(rez.statistika.removeWoodPalets)/1000,
      switchFromBusToBike: Math.round(rez.statistika.switchFromBusToBike)/1000,
      switchHalfCarForBus: Math.round(rez.statistika.switchHalfCarForBus)/1000,
      switchHalfFlightTime: Math.round(rez.statistika.switchHalfFlightTime)/1000,
      switchToVegetarian: Math.round(rez.statistika.switchToVegetarian)/1000,
      tenPercentLessWaste: Math.round(rez.statistika.tenPercentLessWaste)/1000,
      vkupno: Math.round(rez.statistika.vkupno)/1000,
    }

    var myPieChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [this.energijaRez.vkupno, this.hranaRez.vkupno, this.transportRez.vkupno, this.navikiRez.vkupno],
            backgroundColor: [
              'rgba(255, 106, 71, 1)',
              'rgba(255, 194, 35, 1)',
              'rgba(53, 106, 255, 1)',
              'rgba(0, 255, 52, 1)',


          ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Енергија',
          'Прехрана',
          'Транспорт',
          'Навики',
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

  var myBarChart = new Chart("myChart2", {
    type: 'bar',
    data: {
      datasets: [{
          data: [this.energijaRez.drva, this.energijaRez.nafta, this.energijaRez.parno, this.energijaRez.struja, this.energijaRez.paleti,
            this.hranaRez.dieta, this.hranaRez.frlanjeHrana, this.transportRez.avtomobil, this.transportRez.motor, this.transportRez.avtobus,
             this.transportRez.velosiped, this.navikiRez.gjubre, this.navikiRez.obleka],
          backgroundColor: [
            'rgba(255, 106, 71, 1)',
              'rgba(255, 194, 35, 1)',
              'rgba(53, 106, 255, 1)',
              'rgba(0, 255, 52, 1)',
              'rgba(0, 255, 167, 0.3)',
              'rgba(255, 0, 167, 0.😎',
              'rgba(0, 0, 0, 0.3)',
              'rgba(0, 0, 255, 1)',
              'rgba(255, 255, 136, 1)',
              'rgba(255, 138, 136, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 254, 1)',
              'rgba(0, 0, 0, 1)'

        ],
        barPercentage: 0.5,
        barThickness: 10,
        maxBarThickness: 10,
        minBarLength: 2,
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [

          'Енергија-Дрва',
            'Енергија-Нафта',
            'Енергија-Парно',
            'Енергија-Струја',
            "Енерија-Пелети",
            'Прехрана',
            'Фрлање храна',
            'Автомобил',
            'Мотор',
            'Автобус',
            'Велосипед',
            'Отпад',
            'Облека'
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