import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentsModule } from '@basilio-pensim/global';
import { FormsModule } from '@angular/forms';
import { SimulationService } from './services/simulation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  imports: [FormsModule, CommonModule, GlobalComponentsModule],
  providers: [SimulationService],
  styles: [],
  encapsulation: ViewEncapsulation.None,
})

export class SimulationComponent {
  age = 0;
  contribution = 0;
  years = 0;
  result$: Observable<number | null>;

  constructor(private simulationService: SimulationService) {
    this.result$ = this.simulationService.getResult();
  }

  calculate() {
    console.log("Botão Calcular Clicado!");
    console.log(`Enviando para simulação: Age: ${this.age}, Contribution: ${this.contribution}, Years: ${this.years}`);

    this.simulationService.setAge(this.age);
    this.simulationService.setContribution(this.contribution);
    this.simulationService.setYears(this.years);
    
    this.simulationService.calculateSimulation();
  }
}