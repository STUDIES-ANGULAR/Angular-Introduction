import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  
  // @Input('dataPersonajes') personajes: Personaje[] = [];

  //traigo el data personajes que esta en el servicio a travez del get del servicio
  get personajes() {
    return this.dbzService.personajes;
  }
  
  //hacemos el llamado al servicio a traves de una inyeccion de depencencia
  // como este servicio ya esta inicializado en el main-page-component 
  // angular no lo inicializa más de una vez
  constructor(private dbzService: DbzService) {  }
}
