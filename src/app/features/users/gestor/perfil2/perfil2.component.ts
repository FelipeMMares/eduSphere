import { Component } from '@angular/core';
import { GestorBarComponent } from '../../../../shared/components/gestor-bar/gestor-bar.component';

@Component({
  selector: 'app-perfil2',
  standalone: true,
  imports: [GestorBarComponent],
  templateUrl: './perfil2.component.html',
  styleUrl: './perfil2.component.scss'
})
export class Perfil2Component {
  campoDesabilitado = true;
   
  toggleCampo() {
   this.campoDesabilitado = !this.campoDesabilitado;
 }
}
