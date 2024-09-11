import { Component } from '@angular/core';
import { ProfBarComponent } from '../../../../shared/components/prof-bar/prof-bar.component';

@Component({
  selector: 'app-perfil3',
  standalone: true,
  imports: [ProfBarComponent],
  templateUrl: './perfil3.component.html',
  styleUrl: './perfil3.component.scss'
})
export class Perfil3Component {
  campoDesabilitado = true;
   
  toggleCampo() {
   this.campoDesabilitado = !this.campoDesabilitado;
 }
}
