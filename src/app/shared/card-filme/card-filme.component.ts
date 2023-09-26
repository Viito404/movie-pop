import { Component, Input } from '@angular/core';
import { ListagemFilme } from 'src/app/models/listagem-filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent {
  @Input() filme: ListagemFilme = {
    id: 0,
    titulo: '',
    sinopse: '',
    urlPoster: '',
    urlSlide: '',
    urlDetalhes: ''
  }
}
