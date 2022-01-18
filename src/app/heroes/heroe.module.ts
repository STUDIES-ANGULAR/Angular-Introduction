import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //agg los componentes aqui, todo lo que definimos aqui esta invisible exceptuando 
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //que quiero que sea visible fuera de este modulo (hacer publica)
    exports:[
        ListadoComponent        
    ],
    //usualmente solo ponemos modulos como objetos de los imports
    imports:[
        CommonModule //me permite usar las directivas como *ngFor, *ngIf, etc 
    ]

})
export class HeroesModule{

}