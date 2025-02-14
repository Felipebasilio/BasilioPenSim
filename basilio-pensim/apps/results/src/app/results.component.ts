import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentsModule } from '@basilio-pensim/global';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  imports: [CommonModule, GlobalComponentsModule],
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class ResultsComponent {
  projectedAmount = 150000; // Simulação fixa por enquanto
}
