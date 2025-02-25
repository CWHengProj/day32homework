import { Component, inject, Input, OnInit } from '@angular/core';
import { Fruit } from '../../../model/Fruits';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  
  @Input()
  cart:Fruit[]=[]
  private fb = inject(FormBuilder)
  //form is a formGroup
  userForm!:FormGroup
  total:number=0
  ngOnInit(): void {
    this.createForm()
  }
  protected createForm(){
    //when init, instantiate the types so they can be displayed
    this.userForm= this.fb.group(
      {
        name:this.fb.control<string>('',[Validators.required, Validators.minLength(5)]),
        address:this.fb.control<string>('',[Validators.required, Validators.minLength(5)]),
        deliveryType:this.fb.control<string>('delivery',[Validators.required]),
      }
    )
  }
  protected submitForm(){
    console.log('Submitted! ',this.userForm),
    window.alert('Your request has been submitted!')
  }
  protected invalid(){
    return (this.userForm.invalid || (this.cart.length<1))
  }
  protected totalCost():number{
    this.total=0
    this.cart.forEach((item:Fruit)=>{
      this.total+=(item.quantity * item.price)
    })
    return this.total;
  }
        
}
