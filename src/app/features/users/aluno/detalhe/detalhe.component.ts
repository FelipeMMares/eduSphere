import { Component } from '@angular/core';
import { AlunoBarComponent } from '../../../../shared/components/aluno-bar/aluno-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [AlunoBarComponent, RouterLink],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.scss'
})
export class DetalheComponent {

}
