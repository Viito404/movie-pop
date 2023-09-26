import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesFilmeComponent } from './pages/detalhes-filme/detalhes-filme.component';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { ListaFilmeComponent } from './shared/lista-filme/lista-filme.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PaginacaoComponent } from './shared/paginacao/paginacao.component';
import { LetreiroFilmesComponent } from './shared/letreiro-filmes/letreiro-filmes.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalhesFilmeComponent,
    CardFilmeComponent,
    ListaFilmeComponent,
    NavbarComponent,
    PaginacaoComponent,
    LetreiroFilmesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
