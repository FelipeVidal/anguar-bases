import { Injectable } from '@angular/core';

import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

console.log(uuid());


@Injectable({
    providedIn: 'root' //Nuestro servicio va a ser un singleton en toda la aplicación
})
export class DbzService {
    public character: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 5000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 10000
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ]

    addCharacter(character: Character):void{

        const newCharacter: Character = {id:uuid(),...character} //El operador Spread (...) nos permite esparcir la propiedades del objeto "character" en el nuevo objet "newCharacter"

        this.character.push(newCharacter);
    }

    // onDeleteCharacter(index:number){
    //     this.character.splice(index,1)
    // }
    
    deleteCharacterById(id:string){
        this.character = this.character.filter(character=>character.id !== id);
    }
}