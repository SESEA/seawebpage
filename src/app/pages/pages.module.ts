import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';
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
import { QueHacemosComponent } from './como-funciona/que-hacemos/que-hacemos.component';
import { EstructuraComponent } from './como-funciona/estructura/estructura.component';

@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ComoFuncionaComponent,
    NoticiasComponent,
    TransparenciaComponent,
    SesionesComponent,
    IndicadoresComponent,
    AntecedentesComponent,
    QuienesSomosComponent,
    MisionComponent,
    IntegrantesComponent,
    InstitucionesComponent,
    DirectorioComponent,
    QueHacemosComponent,
    EstructuraComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    UIModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
