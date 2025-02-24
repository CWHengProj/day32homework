import { Component } from '@angular/core';
import { Fruit, fruits } from '../model/Fruits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  fruitsList:Fruit[]=[...fruits];
  itemBasket:Fruit[]=[]
  title:string="Shopping"

  protected updateBasket(basket: Fruit[]){
    console.log('basket updated')
    console.log(basket)
    this.itemBasket=basket
  }
}
