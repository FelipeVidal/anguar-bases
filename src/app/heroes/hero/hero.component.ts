import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;
  
  get capitalizedName():string{  //Con get esta función se convierte en una propiedad
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'batman';
  }

  changeAge():void{
    this.age = 20
  }

  reset():void{
    this.name = "ironman";
    this.age = 45;
  }
}
