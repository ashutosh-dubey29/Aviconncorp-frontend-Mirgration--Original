import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Inject} from '@angular/core';
import { DataService } from '../services/data.service';

export interface DialogData {

  from_date: string;
  till_date: string;
 
}

@Component({
  selector: 'app-dg-fuel-excel-export',
  templateUrl: './dg-fuel-excel-export.component.html',
  styleUrls: ['./dg-fuel-excel-export.component.css']
})
export class DgFuelExcelExportComponent implements OnInit {

  myObj = JSON.parse(localStorage.getItem("account"));
  user_id = this.myObj["id"];
  user_type = this.myObj["UserType"];

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DgFuelExcelExportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private dataService:DataService,) { }

    siteId= localStorage.getItem('siteId');
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString().substring(0,10));
    
      excelDataForm = new FormGroup({
      startDate: new FormControl(''),
      endDate: new FormControl(''),

    });

  ngOnInit() {
  }

  onSubmit(){
    let data = {"site_id":this.siteId,"start_date":this.excelDataForm.value.startDate,"end_date":this.excelDataForm.value.endDate,}
     console.log("function called", this.excelDataForm.value);
    this.dataService.showLoader();
    this.dataService.dgFuelExcelExport(data).subscribe(
      (response:any) =>{
        console.log("response : ", response)
        let date = new Date().getDate().toString()+'-'+ new Date().toLocaleDateString("en-US", { month: 'short' })  + '-' + new Date().getFullYear().toString();
        console.log("date : ",date)
        let blob:Blob=response.body as Blob;
        var downloadURL = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = downloadURL;
        link.download = ("Report DG Fuel & Unit Trend_"+date+ ".xlsx")
        link.click();
        this.dialogRef.close();
        this.dataService.hideLoader()
        
        
      }
    )
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
