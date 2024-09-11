import { Component } from '@angular/core';
import { AlunoBarComponent } from '../../../../shared/components/aluno-bar/aluno-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ensino',
  standalone: true,
  imports: [AlunoBarComponent, RouterLink],
  templateUrl: './ensino.component.html',
  styleUrl: './ensino.component.scss'
})
export class EnsinoComponent {

}
