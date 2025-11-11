import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { UserService } from './../services/user.service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

// Only initialize heavy/highcharts modules in non-test environments.
// Karma defines window.__karma__ — skip module initialization when running tests.
try {
  if (!(window as any).__karma__) {
    Boost(Highcharts);
    noData(Highcharts);
    More(Highcharts);
    noData(Highcharts);
  }
} catch (e) {
  // ignore in case window is not available or modules throw in some environments
}

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.css']
})
export class OutputGraphComponent implements OnInit {
   lineChartOptions: any;
   siteId = 90;
   Highcharts = Highcharts;
  @ViewChild('alarmdata') alarmdata: ElementRef;

  
  loadData(data) {
    this.alarmdata.nativeElement.innerHTML = data;
}

constructor(private UserService: UserService,) { }

ngOnInit() {
  Highcharts.chart('alarmdata', this.lineChartOptions);
  this.getMonthlyTrend();
}
 
getMonthlyTrend(){

  let data1 = {'site_id': this.siteId};
  this.UserService.energySavingMonthlyTrend(data1).subscribe(
    response =>{
      let seriesData = [];
        for(let k = 0; k < response['Data'].length; k++)
          { 

            let energyConsumed:any;
             energyConsumed = {"name":"energyConsumed",'y':response['Data'][k]['energy_consumed']}
            let enegySaved = {"name":"energySaved",'y':response['Data'][k]['energy_saved']}
            let percentageSaved = {"name": "percentageSaved",'type':'spline','y':response['Data'][k]['percentage_saved']}
            
           
            let data2 = [{"data":[energyConsumed, enegySaved, percentageSaved]}]
            seriesData.push(data2);
          }

    // highcharts = Highcharts;
    this.lineChartOptions = {
      colorCount:'4',
      colors: ['#90ED7D','#ff7a01', '#7cb5ec', '#058DC7'],
      chart: {
        type: "spline",
        backgroundColor: "#222222",
        
        overflow:'scroll'
      },
    title: {
                style : {
                  color: 'white',
                },
                text: 'Snapshot Monthly Trend'
              },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          style: {
            color: 'white',
          },
        },
        categories: response['months']
      },
      yAxis: {
        title: {
          style: {color:'white',},
          text: "Value"
        },
        labels : {
          style: {
            color:'white'
          }
        }
      },
      
    

      tooltip: {
        valueSuffix: ""
      },
      legend :{
        itemStyle : {color:'white',},
      },
      series:  seriesData 
            }  
    console.log("graph data", this.lineChartOptions)
});

}
  }
