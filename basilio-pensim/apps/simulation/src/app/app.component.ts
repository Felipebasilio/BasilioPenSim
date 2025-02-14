import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimulationComponent } from './simulation.component';

@Component({
  imports: [SimulationComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'simulation';
}
