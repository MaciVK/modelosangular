import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/listaproductos/listaproductos.component';
import { CocheComponent } from './components/coche/coche.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';
import { HijoContadorComponent } from './components/hijocontador/hijocontador.component';
import { PadreContadoresComponent } from './components/padrecontadores/padrecontadores.component';
import { ComicComponent } from './components/PracticaComics/comic/comic.component';
import { LibreriaComponent } from './components/PracticaComics/libreria/libreria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    CocheComponent,
    ConcesionarioComponent,
    HijoContadorComponent,
    PadreContadoresComponent,
    ComicComponent,
    LibreriaComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
