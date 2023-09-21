import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesFilmeComponent } from './pages/detalhes-filme/detalhes-filme.component';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { ListaFilmeComponent } from './shared/lista-filme/lista-filme.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PaginacaoComponent } from './shared/paginacao/paginacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalhesFilmeComponent,
    CardFilmeComponent,
    ListaFilmeComponent,
    NavbarComponent,
    PaginacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
