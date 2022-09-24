import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('qtyInput') qtyInputRef: ElementRef;
  @Output() listUpdated = new EventEmitter<Ingredient>();
  addToShoppingList() {
    this.listUpdated.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.qtyInputRef.nativeElement.value
      )
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
