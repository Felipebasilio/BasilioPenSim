import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private ageSubject = new BehaviorSubject<number | null>(0);
  private contributionSubject = new BehaviorSubject<number | null>(0);
  private yearsSubject = new BehaviorSubject<number | null>(0);
  private resultSubject = new BehaviorSubject<number | null>(0);

  // constructor() {}

  setAge(value: number) {
    console.log(`Idade Atualizada: ${value}`);
    this.ageSubject.next(value);
  }

  setContribution(value: number) {
    console.log(`Contribuição Atualizada: ${value}`);
    this.contributionSubject.next(value);
  }

  setYears(value: number) {
    console.log(`Anos Atualizados: ${value}`);
    this.yearsSubject.next(value);
  }

  calculateSimulation(rate = 0.05) {
    const age = this.ageSubject.value;
    const contribution = this.contributionSubject.value;
    const years = this.yearsSubject.value;

    console.log(`Calculando Simulação com valores:`, { age, contribution, years });

    if (age !== null && contribution !== null && years !== null) {
      const months = years * 12;
      const projectedAmount = contribution * ((Math.pow(1 + rate / 12, months) - 1) / (rate / 12));

      console.log(`Resultado da Simulação: ${projectedAmount}`);
      this.resultSubject.next(projectedAmount);
    }
  }

  getResult(): Observable<number | null> {
    return this.resultSubject.asObservable();
  }
}
