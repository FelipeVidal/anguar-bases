import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    constructor(private dbzService: DbzService ){
        
    } //Se realiza una inyección de la dependencia DbzService

    get characters(): Character[]{
        return [...this.dbzService.character]; "Con Spread creamos una capia de cada uno de los personajes"
    }

    onDeleteCharacter(id :  string):void{
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character: Character):void{
        this.dbzService.addCharacter(character);
    }  
}   
