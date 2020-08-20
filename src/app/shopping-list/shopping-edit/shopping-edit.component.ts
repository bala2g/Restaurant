import { Component, OnInit, ViewChild,ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') nameelementref : ElementRef;
  @ViewChild('amountinput') amountelementref : ElementRef;
@Output() addIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

onAddItem(){
  const nameingredient = this.nameelementref.nativeElement.value;
  const amountingredient = this.amountelementref.nativeElement.value;
  const ingredient = new Ingredient(nameingredient,amountingredient);
  this.addIngredient.emit(ingredient);


}

}
