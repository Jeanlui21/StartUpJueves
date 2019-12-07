import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { RecompensasComponent } from './components/recompensas/recompensas.component';


import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'eventos', component: EventosComponent, canActivate: [AuthGuard]},
  { path: 'recompensas', component: RecompensasComponent, canActivate: [AuthGuard]},
  
  { path: '**', redirectTo: 'menu', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
