import { Component } from '@angular/core';
import { AlunoBarComponent } from '../../../../shared/components/aluno-bar/aluno-bar.component';

@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [AlunoBarComponent],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.scss'
})
export class Dashboard1Component {

}
