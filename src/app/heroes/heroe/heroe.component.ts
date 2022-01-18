import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        if(this.nombre=="Ironman"){
            this.nombre = 'Spiderman';
        }else{
            this.nombre = 'Ironman';
        }
    }

    cambiarEdad(): void {
         this.edad= 30;
    }

    obtenerNombre(): string {

        // ` badtis
        return `${this.nombre} - ${this.edad}`
    }

}