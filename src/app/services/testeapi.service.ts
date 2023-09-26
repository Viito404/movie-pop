import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListagemFilme } from "../models/listagem-filme";
import { environment } from "src/environments/environment.development";
import { TrailerFilme } from "../models/trailer-filme";

@Injectable({
  providedIn: 'root', // App module
})
export class TesteApi{
  private readonly API = `https://api.themoviedb.org/3/movie/`;

  constructor(private http: HttpClient){}

  public selecionarFilmes(): Observable<ListagemFilme[]>{
    const url = `https://api.themoviedb.org/3/movie/popular` 

    return this.http.get<any>(url, this.obterAutorizacao());
  }
  public selecionarTrailers(id:number): Observable<TrailerFilme[]>{
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`;

    return this.http.get<any>(url, this.obterAutorizacao());
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
}