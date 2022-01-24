import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    // la data la dejo privada para evitar manipulaciones en otros apartados de la aplicacion
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8000
        }
    ];

    //le hacemos el get para poder mostrarlo en otros apartados
    get personajes(): Personaje[] {
        //[] arreglo ... operador spread para romper referencia con el _personaje es como el .Copy()
        return [...this._personajes];
    }

    constructor() { }
    
    agregarPersonaje(argumento: Personaje) {
        this._personajes.push(argumento);
        
    }


}