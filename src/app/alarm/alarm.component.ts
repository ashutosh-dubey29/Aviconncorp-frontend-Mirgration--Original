import { Component, OnInit , ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns:any;
  dataSource:any;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }
  
  constructor() { }

  ngOnInit() {
    this.displayedColumns=['custname','totalproperty','sensorbypass','powertheft','internetdown'];
  }
 
}
export interface PeriodicElement{
  custname:string;
  totalproperty:string;
  sensorbypass:string;
  powertheft:string;
  internetdown:string;
}
