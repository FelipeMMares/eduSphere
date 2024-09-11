import { Component } from '@angular/core';
import { AlunoBarComponent } from '../../../../shared/components/aluno-bar/aluno-bar.component';

@Component({
  selector: 'app-boletim',
  standalone: true,
  imports: [AlunoBarComponent],
  templateUrl: './boletim.component.html',
  styleUrl: './boletim.component.scss'
})

export class BoletimComponent {
  // Lista de itens
  itens: { url: string, texto: string }[] = [
    { url: 'https://example.com/1', texto: 'Item 1' },
    { url: 'https://example.com/2', texto: 'Item 2' },
    { url: 'https://example.com/3', texto: 'Item 3' }
  ];
  
  // Estado para mostrar ou ocultar a lista
  mostrarLista: boolean = false;
  listaHtml: string = '';

  // Método para alternar a visibilidade da lista
  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
    this.generateListHtml();
    console.log('listaHtml:', this.listaHtml);
  }
  generateListHtml() {
    if (this.mostrarLista) {
      this.listaHtml = '<ul>';
      this.itens.forEach(item => {
        this.listaHtml += `<li><a href="${item.url}" target="_blank">${item.texto}</a></li>`;
      });
      this.listaHtml += '</ul>';
    } else {
      this.listaHtml = '';
    }
  }
}
