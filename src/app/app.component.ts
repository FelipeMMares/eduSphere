import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './features/landing/landing.component';
import { TesteComponent } from './teste/teste.component';
import { AlunoBarComponent } from './shared/components/aluno-bar/aluno-bar.component';
import { ProfBarComponent } from './shared/components/prof-bar/prof-bar.component';
import { GestorBarComponent } from './shared/components/gestor-bar/gestor-bar.component';
import { Dashboard1Component } from './features/users/aluno/dashboard1/dashboard1.component';
import { Dashboard2Component } from './features/users/gestor/dashboard2/dashboard2.component';
import { Dashboard3Component } from './features/users/professor/dashboard3/dashboard3.component';
import { BoletimComponent } from './features/users/aluno/boletim/boletim.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LandingComponent, LoginComponent, TesteComponent, AlunoBarComponent, ProfBarComponent, GestorBarComponent, Dashboard1Component
    , Dashboard2Component, Dashboard3Component, BoletimComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eduSphere';
}
