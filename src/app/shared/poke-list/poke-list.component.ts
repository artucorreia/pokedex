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
        this.getAllPokemons = this.allPokemons.slice();
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

  public searchTypes(type: string): any {
    return this.getAllPokemons = this.allPokemons.filter( ( element: any ) => {
      if (type === '') return true;
      
      let elementTypes: any = element.status.types;
      let elementHasTheType: boolean = elementTypes.some( 
        (element: any) => element.type.name == type.toLowerCase() 
      );
      
      if ( elementHasTheType ) return true;
      return false;
    });
  }

  public order(orderOption: string) {
    switch (orderOption) {
      case '150-1':
        return this.getAllPokemons.sort((a: any, b: any) => {
          if (a.status.id < b.status.id) return 1;
          if (a.status.id > b.status.id) return -1;
          return 0;
        });
      case 'a-z':
        return this.getAllPokemons.sort((a: any, b: any) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      case 'z-a':
        return this.getAllPokemons.sort((a: any, b: any) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      default:
        return this.getAllPokemons.sort((a: any, b: any) => {
          if (a.status.id < b.status.id) return -1;
          if (a.status.id > b.status.id) return 1;
          return 0;
        });
    }
  }
}
