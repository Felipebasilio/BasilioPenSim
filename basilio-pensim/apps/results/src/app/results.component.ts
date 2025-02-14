import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  standalone: true
})
export class ResultsComponent {
  projectedAmount = 150000; // Simulação fixa por enquanto
}
