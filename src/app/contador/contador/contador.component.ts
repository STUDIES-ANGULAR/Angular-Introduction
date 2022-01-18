import { Component } from '@angular/core'
//agregamos el decorador
@Component({
    selector: 'app-contador',

    template: `
        
        <!-- en estas {{}} puedo escribir cualquier expresion de Js o codigo que esten en las propiedades de la clase-->
        <h1>{{titulo}}</h1>

        <!-- los parentesis son para los eventos (capturar el evento) -->
        <h3>La base es: <strong> {{base}}</strong></h3>

        <button (click) = "acumular(base);" > + {{base}} </button>
        
        <span> {{ numero }} </span>
        
        <button (click) = " acumular(-base) "> - {{base}} </button>
    
    `
})
export class ContadorComponent {

    public titulo: string = 'Acumulador App';
    numero: number = 10;
    base  : number = 5;
  
    acumular(valor: number) {
      this.numero += valor;

    }
}