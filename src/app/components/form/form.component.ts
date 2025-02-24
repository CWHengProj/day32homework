import { Component, Input } from '@angular/core';
import { Fruit } from '../../../model/Fruits';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input()
  cart:Fruit[]=[]
  fb:FormBuilder=new FormBuilder()
  
}
