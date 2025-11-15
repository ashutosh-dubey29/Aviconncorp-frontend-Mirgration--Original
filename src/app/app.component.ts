import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DevToggleComponent } from './dev-toggle/dev-toggle.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, DevToggleComponent]
})
export class AppComponent {
  title = 'movie-rater-web';
  adminDashboard = '';
  isProduction = environment.production;
}
