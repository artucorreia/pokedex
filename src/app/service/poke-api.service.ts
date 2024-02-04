import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  // private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150';
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=7';

  constructor(private http: HttpClient) { }

  get listAllPoemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap( res => res ),
      tap(
        res => {
          res.results.map( (pokemon: any) => {
            this.http.get<any>(pokemon.url).pipe(
              map(
                res => res
              )
            ).subscribe(
              res => pokemon.status = res
            )
          })
        }
      )
    )
  }
}
