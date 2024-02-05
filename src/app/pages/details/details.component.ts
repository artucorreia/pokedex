import { Component } from '@angular/core';

// Activated Route
import { ActivatedRoute } from '@angular/router';

// Service
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  
  public urlParamsId: string = '';
  public selectedPokemon: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.UrlParams;
    this.Pokemon;
  }

  get UrlParams() {
    return this.activatedRoute.params.subscribe({
      next: res => this.urlParamsId = res['id']
    })
  }

  get Pokemon() {
    return this.pokeApiService.getPokemon(this.urlParamsId).subscribe({
      next: res => {
        this.selectedPokemon = res
      },
      error: error => error
    });
  }
}
