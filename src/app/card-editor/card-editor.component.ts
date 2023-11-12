import { Component } from '@angular/core';
import { Card } from '../card.model';  // Importe a interface Card

@Component({
  selector: 'app-card-editor',
  templateUrl: './card-editor.component.html',
  styleUrls: ['./card-editor.component.css']
})
export class CardEditorComponent {
  card: Card = {
    image: '',
    attribute: '',
    attack: 0,
    defense: 0,
    description: ''
  };
 
  saveCard() {
    // Implemente a lógica para salvar a carta aqui
    console.log('Carta salva:', this.card);
  }
}
