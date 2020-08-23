import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') nameelementref : ElementRef;
  @ViewChild('amountinput') amountelementref : ElementRef;


  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
  }

onAddItem(){
  const nameingredient = this.nameelementref.nativeElement.value;
  const amountingredient = this.amountelementref.nativeElement.value;
  const ingredient = new Ingredient(nameingredient,amountingredient);
  this.slService.addIngredients(ingredient);

}

}
