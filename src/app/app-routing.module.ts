import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFilmeComponent } from './shared/lista-filme/lista-filme.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesFilmeComponent } from './pages/detalhes-filme/detalhes-filme.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'filmes/detalhes/:id',
  component: DetalhesFilmeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
