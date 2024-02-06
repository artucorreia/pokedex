import { Component } from '@angular/core';

// Activated Route
import { ActivatedRoute } from '@angular/router';

// ForKJoin
import { forkJoin } from 'rxjs';

// Service
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  
  public urlParamsId: string = '';
  public pokemon: any = [];
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.UrlParams;
    this.InfoPokemon;
  }

  get UrlParams() {
    return this.activatedRoute.params.subscribe({
      next: res => this.urlParamsId = res['id']
    })
  }

  get InfoPokemon() {
    const pokemon = this.pokeApiService.getInfoPokemon(`pokemon/${this.urlParamsId}`);
    const name = this.pokeApiService.getInfoPokemon(`pokemon-species/${this.urlParamsId}`);
    
    return forkJoin([pokemon, name]).subscribe({
      next: res => this.pokemon = res,
      error: () => this.apiError = true
    }); 
  }
}