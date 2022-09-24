import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe(
      'recipe 1',
      'testing recipe',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F19%2F238691-Simple-Macaroni-And-Cheese-mfs_006.jpg'
    ),
    new Recipe(
      'recipe 2',
      'testing recipe 2',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F19%2F238691-Simple-Macaroni-And-Cheese-mfs_006.jpg'
    ),
    new Recipe(
      'recipe 3',
      'testing recipe 3',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F19%2F238691-Simple-Macaroni-And-Cheese-mfs_006.jpg'
    ),
  ];

  @Output() recipeItemClicked = new EventEmitter<Recipe>();

  handleItemClicked(recipeItem: Recipe) {
    this.recipeItemClicked.emit(recipeItem);
  }

  constructor() {}

  ngOnInit(): void {}
}
