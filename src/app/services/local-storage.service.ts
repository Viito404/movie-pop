import { Injectable } from "@angular/core";
import { ListagemFilme } from "../models/listagem-filme";

@Injectable({
  providedIn: 'root', // App module
})
export class LocalStorageService {
private readonly localStorage: Storage;
private readonly storageKey: string = 'apmdb_favoritos@2.0';

private favoritos: ListagemFilme[];

constructor(){
  this.localStorage = window.localStorage;
  this.favoritos = this.carregarFavoritos();
}

public favoritar(filme: ListagemFilme): void{
  if(this.favoritos.find((favorito):boolean => favorito.id == filme.id)) return;

  this.favoritos.push(filme);
  this.gravar();
}

public desfavoritar(id: Number): void{
this.favoritos = this.favoritos.filter((x): boolean => x.id != id)
this.gravar();
}

public carregarFavoritos(): ListagemFilme[] {
  const dados = this.localStorage.getItem(this.storageKey);

  if(!dados) return [];

  const objetos = JSON.parse(dados);

  const filmes = new Array<ListagemFilme>();

  for(const obj of objetos){
    filmes.push(new ListagemFilme(obj.id, obj.titulo, obj.sinopse, obj.urlPoster, obj.url));
  }

  return filmes;
}

public selecionarPorId(id: number): ListagemFilme | undefined {
  return this.favoritos.find((x):boolean => x.id == id);
}

private gravar(): void{
  const favoritosJson = JSON.stringify(this.favoritos);

  this.localStorage.setItem(this.storageKey, favoritosJson);
}
}