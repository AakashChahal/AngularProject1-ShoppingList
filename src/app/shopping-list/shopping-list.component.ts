import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Test', 10)];
  updateShoppingList(newItem: Ingredient) {
    newItem.name != '' && newItem.qty
      ? this.ingredients.push(newItem)
      : console.log();
  }
  constructor() {}

  ngOnInit(): void {}
}
