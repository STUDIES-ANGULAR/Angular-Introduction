import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html'
})
export class AgregarPersonajeComponent {

  @Input('nuevoPersonaje') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  constructor(private dbzService: DbzService) { }
  //siempre agregar el <tipo> de dato a emitir como evento
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    //emitimos/mandamos el dato desde el hijo agregarPersonaje a el padre (main-page) que es quien lo invoca
    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje(this.nuevo);


    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}

