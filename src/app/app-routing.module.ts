import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperativosComponent } from './operativos/operativos.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { OperativoDetailComponent } from './operativo-detail/operativo-detail.component';
import { ResponsableDetailComponent } from "./responsable-detail/responsable-detail.component";
import { ResponsablesComponent } from './responsables/responsables.component';
import { ChartsComponent } from './charts/charts.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'operativos', component: OperativosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: OperativoDetailComponent },
  { path: 'responsable/:id', component: ResponsableDetailComponent },
  { path: 'responsables', component: ResponsablesComponent },
  { path: 'graficas', component: ChartsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
