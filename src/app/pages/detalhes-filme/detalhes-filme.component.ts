import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DetalhesFilme } from 'src/app/models/detalhes-filme';
import { TrailerFilme } from 'src/app/models/trailer-filme';
import { FilmeService } from 'src/app/services/filme.service';

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
    private filmeService: FilmeService
  ) 
  {
    this.filme = new DetalhesFilme(0, '', '', '', '', '', 0, 0, []);
    this.trailer = new TrailerFilme(0,'');
  }

  ngOnInit(): void {
    this.selecionarFilmePorId();
    this.selecionarTrailerPorId();
  }

  selecionarFilmePorId() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.filmeService.selecionarPorId(id).subscribe((filme: DetalhesFilme) => {
      this.filme = filme;
    });
  }

  selecionarTrailerPorId(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.filmeService.selecionarTrailersPorId(id).subscribe((trailer: TrailerFilme) => {
      this.trailer = trailer;
    });
  }
}
