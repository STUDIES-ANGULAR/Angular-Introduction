import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
     nombre:'Vegeta' ,
     poder: 8000
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }else{
      this.personajes.push(this.nuevo)
    }
    console.log(this.nuevo);
    this.nuevo= {nombre: '', poder: 0}
  }

  /*agregar(event:any){
    event.preventDefault(); //prevee el comportamiento por defecto que tiene el submit de un formulario
    console.log('hey..')
  }*/


}
