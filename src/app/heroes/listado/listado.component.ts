import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman', 'Ironman', 'Hulk','Thor', 'Capitán América'];
  heroesEliminados: string [] = [];
  heroeBorrado: string = '';
  
  borrarHeroe(){
     this.heroeBorrado =  this.heroes.shift() || '';
    this.heroesEliminados.push(' ' , this.heroeBorrado);
   //this.heroeBorrado= this.heroes.shift() || '';
    
  }

 

}

