import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { Card } from '../card.model';  // Importe a interface Card

@Component({
  selector: 'app-card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.css']
})
export class CardViewerComponent {
  @ViewChild('cardContainer') cardContainer!: ElementRef;

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
  exportCard() {
    // Use html2canvas para converter a visualização da carta em uma imagem
    html2canvas(this.cardContainer.nativeElement).then((canvas) => {
      // Converta o canvas para um URL de dados
      const imgDataUrl = canvas.toDataURL('image/png');

      // Crie um link temporário e clique nele para baixar a imagem
      const link = document.createElement('a');
      link.href = imgDataUrl;
      link.download = 'carta.png';
      link.click();
    });
  }
}
