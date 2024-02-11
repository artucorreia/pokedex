import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {
  
  @Output() public sharedName = new EventEmitter<string>();
  @Output() public sharedType = new EventEmitter<string>();
  @Output() public sharedOrder = new EventEmitter<string>();

  public typeList: string[] = [
    'Normal', 
    'Fire', 
    'Water', 
    'Electric', 
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
    'Steel', 
    'Fairy'
  ]
  
  constructor() { }

  public getName(inputValue: string) {
    this.sharedName.emit(inputValue);    
  }

  public getType(type: any) {
    this.sharedType.emit(type);    
  }

  public getOrder(order: string) {
    this.sharedOrder.emit(order);
  }
}
