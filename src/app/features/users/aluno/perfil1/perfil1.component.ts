import { Component } from '@angular/core';
import { AlunoBarComponent } from '../../../../shared/components/aluno-bar/aluno-bar.component';

@Component({
  selector: 'app-perfil1',
  standalone: true,
  imports: [AlunoBarComponent],
  templateUrl: './perfil1.component.html',
  styleUrl: './perfil1.component.scss'
})
export class Perfil1Component {
   campoDesabilitado = true;
   
   toggleCampo() {
    this.campoDesabilitado = !this.campoDesabilitado;
  }
}
