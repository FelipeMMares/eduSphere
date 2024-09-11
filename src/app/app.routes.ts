import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { ContatoComponent } from './features/contato/contato.component';
import { LoginComponent } from './login/login.component';
import { TesteComponent } from './teste/teste.component';
import { AlunoBarComponent } from './shared/components/aluno-bar/aluno-bar.component';
import { ProfBarComponent } from './shared/components/prof-bar/prof-bar.component';
import { GestorBarComponent } from './shared/components/gestor-bar/gestor-bar.component';
import { Dashboard1Component } from './features/users/aluno/dashboard1/dashboard1.component';
import { Dashboard2Component } from './features/users/gestor/dashboard2/dashboard2.component';
import { Dashboard3Component } from './features/users/professor/dashboard3/dashboard3.component';
import { Perfil1Component } from './features/users/aluno/perfil1/perfil1.component';
import { Perfil2Component } from './features/users/gestor/perfil2/perfil2.component';
import { Perfil3Component } from './features/users/professor/perfil3/perfil3.component';
import { BoletimComponent } from './features/users/aluno/boletim/boletim.component';
import { DetalheComponent } from './features/users/aluno/detalhe/detalhe.component';
import { EnsinoComponent } from './features/users/aluno/ensino/ensino.component';
import { EventosComponent } from './features/users/aluno/eventos/eventos.component';
import { DiscenteComponent } from './features/users/professor/discente/discente.component';

export const routes: Routes = [
    {
    path: '',
    component: LandingComponent,
},
{
    path: 'contato',
    component: ContatoComponent
},
{path:'login', component: LoginComponent},
{
path:'teste', component: TesteComponent
},
{path:'', component: AlunoBarComponent},
{path:'', component: ProfBarComponent},
{path:'', component: GestorBarComponent},
{path:'home1', component: Dashboard1Component},
{path:'home2', component: Dashboard2Component},
{path:'home3', component: Dashboard3Component},
{path:'perfil1', component: Perfil1Component},
{path:'perfil2', component: Perfil2Component},
{path:'perfil3', component: Perfil3Component},
{path:'boletim', component: BoletimComponent},
{path:'boletim/detalhe', component: DetalheComponent},
{path:'ensino', component: EnsinoComponent},
{path:'ensino/eventos', component: EventosComponent},
{path:'discentes', component: DiscenteComponent},
];
