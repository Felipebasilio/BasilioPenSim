import { Component } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  standalone: true
})
export class SimulationComponent {
  age!: number;
  contribution!: number;
  years!: number;
  rate = 0.05; // Taxa de juros fixa
  result!: number;

  calculate() {
    const months = this.years * 12;
    this.result = this.contribution * ((Math.pow(1 + this.rate / 12, months) - 1) / (this.rate / 12));
  }
}
