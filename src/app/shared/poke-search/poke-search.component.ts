import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {
  
  @Output() public sharedName = new EventEmitter<string>();

  constructor() { }

  public getName(inputValue: string) {
    this.sharedName.emit(inputValue);    
  }
}
