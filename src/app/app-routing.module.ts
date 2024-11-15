import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PoliticaComponent } from './politica/politica.component';
const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobrenosotros', component: SobrenosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'politica', component: PoliticaComponent }


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }