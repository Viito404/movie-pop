import { Injectable } from "@angular/core";
import { ListagemFilme } from "../models/listagem-filme";
import { DetalhesFilme } from "../models/detalhes-filme";

@Injectable({
  providedIn: 'root', // App module
})
export class LocalStorageService {
private readonly localStorage: Storage;
private readonly storageKey: string = 'apmdb_favoritos@2.0';

private favoritos: DetalhesFilme[];

constructor(){
  this.localStorage = window.localStorage;
  this.favoritos = this.carregarFavoritos();
}

public favoritar(filme: DetalhesFilme): void{
  if(this.favoritos.find((favorito):boolean => favorito.id == filme.id)) return;

  this.favoritos.push(filme);
  this.gravar();
}

public desfavoritar(id: Number): void{
this.favoritos = this.favoritos.filter((x): boolean => x.id != id)
this.gravar();
}

public carregarFavoritos():DetalhesFilme[] {
  const dados = this.localStorage.getItem(this.storageKey);

  if(!dados) return [];

  const objetos = JSON.parse(dados);

  const filmes = new Array<DetalhesFilme>();

  for(const obj of objetos){
    filmes.push(new DetalhesFilme(obj.id, obj.titulo, obj.sinopse, obj.dataLancamento, obj.urlPoster, obj.urlSlide, obj.mediaNota, obj.contagemVotos, obj.generos));
  }

  return filmes;
}

public selecionarPorId(id: number): DetalhesFilme | undefined {
  return this.favoritos.find((x):boolean => x.id == id);
}

private gravar(): void{
  const favoritosJson = JSON.stringify(this.favoritos);

  this.localStorage.setItem(this.storageKey, favoritosJson);
}
}