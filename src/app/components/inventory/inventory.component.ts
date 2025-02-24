import { Component, Input, Output } from '@angular/core';
import { Fruit, fruits } from '../../../model/Fruits';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  @Input()
  fruits!:Fruit[]
  cart:Fruit[]=[]

  matches!:Fruit[]

  @Output()
  itemUpdated = new Subject<Fruit[]>

  protected addFruit(fruit:Fruit){
    //add the fruit if it does not already exist in the cart
    fruit.quantity++
    this.checkMatches(fruit)
    if(this.matches.length<1){
      this.cart.push(fruit)
    }
    this.itemUpdated.next(this.cart)
  }

  protected removeFruit(fruit:Fruit){
    this.checkMatches(fruit)
    //decrease the quantity if it exists
    fruit.quantity--
      //remove the fruit
      if(fruit.quantity<1){
        fruit.quantity=0
        this.cart=this.cart.filter((item:Fruit)=>{return item.name!==fruit.name})
      }
    this.itemUpdated.next(this.cart)
  }

  protected checkMatches(fruit:Fruit){
    this.matches=this.cart.filter(((item:Fruit)=>{ return item.name===fruit.name}))
  }
}
