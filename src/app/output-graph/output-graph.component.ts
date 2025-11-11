import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';

// We will pass heavy/highcharts modules into the standalone wrapper component
// instead of initializing them globally here. Use require to keep compatibility
// with the project's existing Highcharts v7 layout.
declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

@Component({
    selector: 'app-output-graph',
    templateUrl: './output-graph.component.html',
    styleUrls: ['./output-graph.component.css'],
    standalone: false
})
export class OutputGraphComponent implements OnInit {
  lineChartOptions: any;
  siteId = 90;
  // Pass module functions to the wrapper
  hcModules: Array<any> = [Boost, noData, More];
  // Simple toggle to force the wrapper to call update
  chartUpdateFlag = false;

  constructor(private UserService: UserService,) { }

  ngOnInit() {
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

    // Compose options for the standalone wrapper
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
    };

    // toggle update flag so the wrapper updates (or creates) the chart
    this.chartUpdateFlag = !this.chartUpdateFlag;
    console.log("graph data", this.lineChartOptions);
    });

}
  }
