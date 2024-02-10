import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {
  
  @Output() public sharedName = new EventEmitter<string>();

  public typeList: string[] = [
    'Normal', 
    'Fire', 
    'Water', 
    'Eletric', 
    'Grass', 
    'Ice', 
    'Fighting', 
    'Poison', 
    'Ground', 
    'Flying', 
    'Psychic', 
    'Bug', 
    'Rock', 
    'Ghost', 
    'Dragon', 
    'Dark', 
    'Steel', 
    'Fairy'
  ]
  
  constructor() { }

  public getName(inputValue: string) {
    this.sharedName.emit(inputValue);    
  }
}
