import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-coming-dash',
    templateUrl: './coming-dash.component.html',
    styleUrls: ['./coming-dash.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule]
})
export class ComingDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
