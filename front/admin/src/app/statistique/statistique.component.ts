import { StatService } from '../service/stat.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import '../../assets/charts/amchart/amcharts.js';
import '../../assets/charts/amchart/gauge.js';
import '../../assets/charts/amchart/pie.js';
import '../../assets/charts/amchart/serial.js';
import '../../assets/charts/amchart/light.js';
import '../../assets/charts/amchart/ammap.js';
import '../../assets/charts/amchart/worldLow.js';


declare const AmCharts: any;
declare const $: any;

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: [
    './statistique.component.scss',
    '../../assets/icon/svg-animated/svg-weather.css'
  ]
})
export class StatistiqueComponent implements OnInit {
  listmois ! : any [];
  listjours ! : any [];
  indicemois ! : number;
  totalValueGraphData1 = buildChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45,11,11], '#3a73f1', 'transparent');
  totalValueGraphData2 = buildChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10,11,11], '#e55571', 'transparent');
  totalValueGraphOption = buildChartOption();
  monthact = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','Novembre','December'];
  anneeAct = new Date().getFullYear();
  noDataDay ! : boolean;

  constructor(private statService : StatService) { }

  async getValueMonth(month : number) : Promise<number>{
    let ret = 0;
    if(this.listmois.length){
      await this.listmois.map((val) => {
        if(val._id[0].mois === month){
          ret = val.chiffreAffaire;
        }
      });
    }
    if(ret ===0 ){
      return 0;
    } else {
      return ret;
    }
  }

  async getValueDay() : Promise<any []>{
    let ret = [];
    this.noDataDay = false;
    try {
      if(this.listmois.length){
          await this.listjours.map((val) => {
        ret.push({
              date: val._id[0].mois < 10 ? val._id[0].annee+'-0'+val._id[0].mois+'-'+val._id[0].jour : val._id[0].annee+'-'+val._id[0].mois+'-'+val._id[0].jour,
              chiffre: val.chiffreAffaire,
            });
        });
      }
      if(ret.length === 0 ){
        return [];
      } else {
        return ret;
      }
    } catch (err) {
      this.noDataDay = true;
    }
  }

  getSelectedMonth() {

    this.statService.getPaiementMonth((this.indicemois+1).toString(),this.anneeAct.toString()).subscribe(
      async (res : any) => {
        if (res) {
            this.listjours = res;
            AmCharts.makeChart('email-sent', {
              type: 'serial',
              theme: 'light',

              dataDateFormat: 'YYYY-MM-DD',
              precision: 2,
              valueAxes: [
                {
                  id: 'v1',
                  title: 'Chiffre d\'affaire',
                  position: 'left',
                  autoGridCount: false,
                },
                {
                  id: 'v2',
                  title: '',
                  gridAlpha: 0,
                  fontSize: 0,
                  axesAlpha: 0,
                  position: 'left',
                  autoGridCount: false
                }
              ],
              graphs:
                [
                  {
                    id: 'g3',
                    valueAxis: 'v1',
                    lineColor: '#4680ff',
                    fillColors: '#4680ff',
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Chiffre d\'Affaire',
                    valueField: 'chiffre',
                    clustered: true,
                    columnWidth: 0.4,
                    legendValueText: 'Ar[[value]]',
                    balloonText: '[[title]]<br /><b style="font-size: 130%">Ar[[value]]</b>'
                  }
                ],
              chartCursor: {
                pan: true,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                cursorAlpha: 0,
                valueLineAlpha: 0.2
              },
              categoryField: 'date',
              categoryAxis: {
                parseDates: true,
                dashLength: 0,
                axisAlpha: 0,
                GridAlpha: 0,
                minorGridEnabled: true
              },
              legend: {
                useGraphSettings: true,
                position: 'top'
              },
              balloon: {
                borderThickness: 1,
                shadowAlpha: 0
              },
              'export': {
                enabled: true
              },
              dataProvider:
               await this.getValueDay().then((val) => {
                  return val;
                })

            });
        } else {
          this.listjours = [];
        }
      }
    )
  }
   ngOnInit() {
      this.noDataDay = false;
      this.indicemois = 0;
      this.statService.getPaiementThisYear().subscribe(
      async (res : any) =>{
          if (res) {
            this.listmois = res;

            AmCharts.makeChart('statistics-chart', {
              type: 'serial',
              marginTop: 0,

              marginRight: 0,
              dataProvider: [{
                year: 'Jan',
                value: await this.getValueMonth(1).then((value)=> { return value;})
              }, {
                year: 'Feb',
                value: await this.getValueMonth(2).then((value)=> { return value;})
              }, {
                year: 'Mar',
                value: await this.getValueMonth(3).then((value)=> { return value;})
              }, {
                year: 'Apr',
                value: await this.getValueMonth(4).then((value)=> { return value;})
              }, {
                year: 'May',
                value: await this.getValueMonth(5).then((value)=> { return value;})
              }, {
                year: 'Jun',
                value: await this.getValueMonth(6).then((value)=> { return value;})
              }, {
                year: 'Jul',
                value: await this.getValueMonth(7).then((value)=> { return value;})
              }, {
                year: 'Aug',
                value: await this.getValueMonth(8).then((value)=> { return value;})
              }, {
                year: 'Sep',
                value: await this.getValueMonth(9).then((value)=> { return value;})
              }
              , {
                year: 'Oct',
                value: await this.getValueMonth(10).then((value)=> { return value;})
              },
              {
                year: 'Nov',
                value: await this.getValueMonth(11).then((value)=> { return value;})
              }
              ,
              {
                year: 'Dec',
                value: await this.getValueMonth(12).then((value)=> {return value;})
              }
            ],
              valueAxes: [{
                axisAlpha: 0,
                dashLength: 6,
                gridAlpha: 0.1,
                position: 'left'
              }],
              graphs: [{
                id: 'g1',
                bullet: 'round',
                bulletSize: 9,
                lineColor: '#4680ff',
                lineThickness: 2,
                negativeLineColor: '#4680ff',
                type: 'smoothedLine',
                valueField: 'value',
                legendValueText: 'Ar[[value]]',
                balloonText: '[[title]]<br /><b style="font-size: 130%">Ar[[value]]</b>'
              }],
              chartCursor: {
                cursorAlpha: 0,
                valueLineEnabled: false,
                valueLineBalloonEnabled: true,
                valueLineAlpha: false,
                color: '#fff',
                cursorColor: '#FC6180',
                fullWidth: true
              },
              categoryField: 'year',
              categoryAxis: {
                gridAlpha: 0,
                axisAlpha: 0,
                fillAlpha: 1,
                fillColor: '#FAFAFA',
                minorGridAlpha: 0,
                minorGridEnabled: true
              },
              'export': {
                enabled: true
              }
            });
          } else {
            this.listmois = [];
          }
      }
    );

    this.statService.getPaiementMonth((this.indicemois+1).toString() , this.anneeAct.toString()).subscribe(
      async (res : any) => {
        if (res) {
            this.listjours = res;
            AmCharts.makeChart('email-sent', {
              type: 'serial',
              theme: 'light',

              dataDateFormat: 'YYYY-MM-DD',
              precision: 2,
              valueAxes: [
                {
                  id: 'v1',
                  title: 'Chiffre d\'affaire',
                  position: 'left',
                  autoGridCount: false,
                },
                {
                  id: 'v2',
                  title: '',
                  gridAlpha: 0,
                  fontSize: 0,
                  axesAlpha: 0,
                  position: 'left',
                  autoGridCount: false
                }
              ],
              graphs:
                [
                  {
                    id: 'g3',
                    valueAxis: 'v1',
                    lineColor: '#4680ff',
                    fillColors: '#4680ff',
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Chiffre d\'Affaire',
                    valueField: 'chiffre',
                    clustered: true,
                    columnWidth: 0.4,
                    legendValueText: 'Ar[[value]]',
                    balloonText: '[[title]]<br /><b style="font-size: 130%">Ar[[value]]</b>'
                  }
                ],
              chartCursor: {
                pan: true,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                cursorAlpha: 0,
                valueLineAlpha: 0.2
              },
              categoryField: 'date',
              categoryAxis: {
                parseDates: true,
                dashLength: 0,
                axisAlpha: 0,
                GridAlpha: 0,
                minorGridEnabled: true
              },
              legend: {
                useGraphSettings: true,
                position: 'top'
              },
              balloon: {
                borderThickness: 1,
                shadowAlpha: 0
              },
              'export': {
                enabled: true
              },
              dataProvider:
               await this.getValueDay().then((val) => {
                  return val;
                })

            });
        } else {
          this.listjours = [];
        }
      }
    )
    AmCharts.makeChart('solid-gauge1', {
      type: 'gauge',

      theme: 'light',
      axes: [{
        axisAlpha: 0,
        tickAlpha: 0,
        labelsEnabled: false,
        startValue: 0,
        endValue: 100,
        startAngle: 0,
        endAngle: 360,
        bands: [{
          color: '#E5E5E5',
          startValue: -35,
          endValue: 35,
          radius: '100%',
          innerRadius: '92%'
        }, {
          color: '#93BE52',
          startValue: -35,
          endValue: 20,
          radius: '100%',
          innerRadius: '92%'
        }]
      }],
      'export': {
        enabled: true
      }
    });
  }

  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }

}

function getRandomData() {
  let data = [];
  const totalPoints = 300;
  if (data.length > 0) {
    data = data.slice(1);
  }

  while (data.length < totalPoints) {
    const prev = data.length > 0 ? data[data.length - 1] : 50;
    let y = prev + Math.random() * 10 - 5;
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    data.push(y);
  }

  const res = [];
  for (let i = 0; i < data.length; ++i) {
    res.push([i, data[i]]);
  }
  return res;
}

function buildChartJS(a, b, f, c) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','Novembre','December'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 2,
      hitRadius: 30,
      pointHoverRadius: 4,
      pointBorderWidth: 50,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: c,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: 'rgba(0,0,0,0.5)',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}

function buildChartOption() {
  return {
    title: {
      display: false
    },
    tooltips: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    legend: {
      display: false,
      labels: {
        usePointStyle: false
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0
      }
    }
  };
}
