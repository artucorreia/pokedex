import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  // public array: number[] = [1,2,3,4,5];

  public allPokemons: any = [];

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.listAllPoemons.subscribe({
      next: allPokemons => {
        this.allPokemons = allPokemons.results
      },
      error: error => console.log(error)
    });
  }
}
