import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResultsComponent } from './results.component';

@Component({
  imports: [ResultsComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'results';
}
