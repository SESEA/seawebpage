import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { AntecedentesComponent } from './nosotros/antecedentes/antecedentes.component';
import { QuienesSomosComponent } from './nosotros/quienes-somos/quienes-somos.component';
import { MisionComponent } from './nosotros/mision/mision.component';
import { IntegrantesComponent } from './nosotros/integrantes/integrantes.component';
import { InstitucionesComponent } from './nosotros/instituciones/instituciones.component';
import { DirectorioComponent } from './nosotros/directorio/directorio.component';
import { EstructuraComponent } from './como-funciona/estructura/estructura.component';
import { QueHacemosComponent } from './como-funciona/que-hacemos/que-hacemos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'nosotros', component: NosotrosComponent,
    children: [
      { path: 'antecedentes', component: AntecedentesComponent },
      { path: 'quienes-somos', component: QuienesSomosComponent },
      { path: 'mision', component: MisionComponent },
      { path: 'integrantes', component: IntegrantesComponent },
      { path: 'instituciones', component: InstitucionesComponent },
      { path: 'directorio', component: DirectorioComponent },
    ]
  },
  {
    path: 'como-funciona', component: ComoFuncionaComponent,
    children: [
      { path: 'estructura', component: EstructuraComponent },
      { path: 'que-hacemos', component: QueHacemosComponent },
    ]
  },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'transparencia', component: TransparenciaComponent },
  { path: 'sesiones', component: SesionesComponent },
  { path: 'indicadores', component: IndicadoresComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
