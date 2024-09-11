import { Component } from '@angular/core';
import { AlunoBarComponent } from '../../../../shared/components/aluno-bar/aluno-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [AlunoBarComponent, RouterLink],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {

}
