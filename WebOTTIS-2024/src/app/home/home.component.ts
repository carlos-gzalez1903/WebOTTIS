// import { Component } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'home-ottis',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalo: any;
  intervaloTiempo = 5000; // 5 segundos
  numeroDeDiapositiva = 0;

  constructor() { }

  ngOnInit(): void {
    this.iniciarIntervalo();
  }

  ngOnDestroy(): void {
    this.detenerIntervalo();
  }

  private iniciarIntervalo(): void {
    this.intervalo = setInterval(() => {
      this.cambiarDiapositiva();
    }, this.intervaloTiempo);
  }

  private detenerIntervalo(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  private cambiarDiapositiva(): void {
    // Cambiar lógica de diapositiva según tus necesidades
    this.numeroDeDiapositiva = (this.numeroDeDiapositiva + 1) % 3;
  }
}

