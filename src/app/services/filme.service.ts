import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { ListagemFilme } from '../models/listagem-filme';
import { DetalhesFilme } from '../models/detalhes-filme';
import { TrailerFilme } from '../models/trailer-filme';

@Injectable({
  providedIn: 'root', // App module
})
export class FilmeService {

  private readonly API = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

  public selecionarPorId(id:number): Observable<DetalhesFilme>{
    const url = `${this.API}${id}?language=pt-BR`;

    return this.http.get<any>(url, this.obterAutorizacao())
    .pipe(map((obj: any)=> this.mapearDetalhesFilme(obj)))
  }

  public selecionarTrailersPorId(id:number): Observable<TrailerFilme>{
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`;

    return this.http.get<any>(url, this.obterAutorizacao())
    .pipe(map((obj: any) => this.mapearTrailersFilme(obj)))
  }




  public selecionarPopulares(): Observable<ListagemFilme[]> {
    const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR`;

    return this.http.get<any[]>(url, this.obterAutorizacao()).pipe(
      map((archive: any) => {
        return archive.results.map((obj: any) => {
          return this.mapearListaFilmes(obj);
        });
      }));
  }
  public selecionarPorVir(): Observable<ListagemFilme[]> {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=pt-BR`;

    return this.http.get<any[]>(url, this.obterAutorizacao()).pipe(
      map((archive: any) => {
        return archive.results.map((obj: any) => {
          return this.mapearListaFilmes(obj);
        });
      }));
  }
  private obterAutorizacao(){
    return {
      method: 'GET',
      headers: {
        accept: 'application.json',
        Authorization: environment.API_KEY
      }
    }
  }

  private mapearListaFilmes(obj: any): ListagemFilme{
    return {
      id: obj.id,
      titulo: obj.title,
      sinopse: obj.overview,
      urlPoster: "https://image.tmdb.org/t/p/original/" + obj.poster_path,
      urlSlide: "https://image.tmdb.org/t/p/original/" + obj.backdrop_path,
      urlDetalhes: `detalhes.html?id=${obj.id}`
    };
}
private mapearTrailersFilme(obj: any): TrailerFilme{
  return {
    id: obj.id,
    sourceUrl: obj.key
  };
}

private mapearDetalhesFilme(obj: any): DetalhesFilme{
  return {
    id: obj.id,
    titulo: obj.title,
    sinopse: obj.overview,
    dataLancamento: obj.release_date,
    urlPoster: "https://image.tmdb.org/t/p/original/" + obj.poster_path,
    urlSlide: "https://image.tmdb.org/t/p/original/" + obj.backdrop_path,
    mediaNota: obj.vote_average,
    contagemVotos: obj.vote_count,

    generos: obj.genre_ids
  };
}
    
}
