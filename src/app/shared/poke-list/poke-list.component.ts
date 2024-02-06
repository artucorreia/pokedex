import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  public allPokemons: any = [];
  public getAllPokemons: any = [];

  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.listAllPoemons.subscribe({
      next: allPokemons => {
        this.allPokemons = allPokemons.results;
        this.getAllPokemons = this.allPokemons;
      },
      error: () => this.apiError = true
    });
  }

  public searchName(pokemonName: string): any {
    return this.getAllPokemons = this.allPokemons.filter( ( element: any ) => {
      if
      (element.name.indexOf(pokemonName.toLowerCase()) != -1) {
        return true;
      }
      return false;
    });
  }
}
