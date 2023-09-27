import { Component, OnInit } from '@angular/core';
import { TesteApi } from './services/testeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movie-pop';

  constructor(private testService: TesteApi){}

  ngOnInit(): void {
    // this.testService.selecionarFilmes().subscribe((res) => console.log(res));
    this.testService.selecionarTrailers(976573).subscribe((res) => console.log(res))
  }

}
