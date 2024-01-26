import { Component } from '@angular/core';

@Component({
  selector: 'buttons-ottis',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  // Define el método animateButton
  animateButton(isMouseEnter: boolean) {
    // Lógica de la animación aquí
    console.log('Mouse entered:', isMouseEnter);
  }
}
