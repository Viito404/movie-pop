import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DetalhesFilme } from 'src/app/models/detalhes-filme';
import { ListagemFilme } from 'src/app/models/listagem-filme';
import { TrailerFilme } from 'src/app/models/trailer-filme';
import { FilmeService } from 'src/app/services/filme.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css'],
})
export class DetalhesFilmeComponent implements OnInit {
  filme: DetalhesFilme;
  trailer: TrailerFilme;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmeService: FilmeService,
    private sanitizer: DomSanitizer,
    private storageService: LocalStorageService
  ) 
  {
    this.filme = new DetalhesFilme(0, '', '', '', '', '', 0, 0, []);
    this.trailer = new TrailerFilme(0,'')
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.selecionarFilmePorId(id);
    this.selecionarTrailerPorId(id);
  }

  selecionarFilmePorId(id:number) {
    this.filmeService.selecionarPorId(id).subscribe((filme: DetalhesFilme) => {
      this.filme = filme;
      console.log(filme);
    });
  }

  selecionarTrailerPorId(id:number){
    this.filmeService.selecionarTrailersPorId(id).subscribe((trailer) => {
      console.log(trailer);
      this.trailer.sourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + trailer.key) as string;
    })
  }

  favoritarFilme(filme: DetalhesFilme){
    this.storageService.favoritar(filme);
    this.filme.favoritado = true;
  }
}
