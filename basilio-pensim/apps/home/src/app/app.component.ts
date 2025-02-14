import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@Component({
  imports: [HomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'home';
}
