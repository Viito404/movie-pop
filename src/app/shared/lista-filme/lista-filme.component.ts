import { Component, OnInit } from '@angular/core';
import { ListagemFilme } from 'src/app/models/listagem-filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css']
})
export class ListaFilmeComponent implements OnInit{

  filmes: ListagemFilme[] = [];

constructor(private filmeService: FilmeService){}

ngOnInit(): void {
  this.selecionarFilmesPopulares();


}
selecionarFilmesPopulares():any{
  this.filmeService.selecionarPopulares().subscribe((filmes) => {
    this.filmes = filmes;
  });
}
}


