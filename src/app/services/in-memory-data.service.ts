import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../Hero';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mr Lee' ,email: 'nice@de.sd'},
      { id: 11, name: 'Dr Nice' ,email: 'nice@de.sd'},
      { id: 12, name: 'Narco',email: 'nice@de.sd'},
      { id: 13, name: 'Bombasto' ,email: 'nice@de.sd'},
      { id: 14, name: 'Celeritas' ,email: 'nice@de.sd'},
      { id: 15, name: 'Magneta' ,email: 'nice@de.sd'},
      { id: 16, name: 'RubberMan',email: 'nice@de.sd'},
      { id: 17, name: 'Dynama' ,email: 'nice@de.sd'},
      { id: 18, name: 'Dr IQ',email: 'nice@de.sd'},
      { id: 19, name: 'Magma' ,email: 'nice@de.sd'},
      { id: 20, name: 'Tornado' ,email: 'nice@de.sd'},
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}