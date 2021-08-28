import { Post } from './../models/post.model';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // recipes;

  constructor(
    private db: AngularFireDatabase,
    // private slService: ShoppingListService
    ) { }

  // create(recipe) {
  //   return this.db.list('/recipes').push(recipe);
  // }

  getAll() {
    return this.db.list<Post>('/posts')
        .snapshotChanges()
        .pipe(
            map(changes =>
                changes.map(post => {
                    const data = post.payload.val() as Post;
                    const id = post.payload.key;
                    return { id, ...data };
                })
            )
        );
}

  get(postId) {
    return this.db.object('/posts/' + postId).valueChanges();
  }

    update(postId, updatedPost) {
    return this.db.object('/posts/' + postId).update(updatedPost);
  }
  // get(recipeId) {
  //   return this.db.object('/recipes/' + recipeId).valueChanges();
  // }

  // getRecipeById(recipeId) {
  //   return this.db.list<Product>('/recipes', ref => ref.orderByChild('recipeId').equalTo(recipeId))
  //   .snapshotChanges()
  //   .pipe(
  //       map(changes =>
  //           changes.map(o => {
  //               const data = o.payload.val() as Product;
  //               const key = o.payload.key;
  //               return { key, ...data };
  //           })
  //       )
  //   );
  // }

  // getRecipe(index: number) {
  //   // return this.recipes[index];
  // }

  // update(recipeId, recipe, lastUpdate) {
  //   return this.db.object('/recipes/' + recipeId).update(recipe);
  // }

  // delete(recipeId) {
  //   return this.db.object('/recipes/' + recipeId).remove();
  // }


  //     ]),
  //     // // TODO: REDUX WAY
  //     // [
  //     //   new Ingredient('1', 'Meat', '1'),
  //     //   new Ingredient('2', 'French Fries', '20')
  //     // ]),
  //   new Recipe(
  //     'Another Test Recipe',
  //     'This is simply a Test',
  //     'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
  //     [
  //       new Ingredient('3', 'Buns'),
  //       new Ingredient('1', 'Meat')
  //     ])
  //     // // TODO: REDUX WAY
  //     // [
  //     //   new Ingredient('3', 'Buns', '1'),
  //     //   new Ingredient('1', 'Meat', '2')
  //     // ])
  // ];

  // constructor(private slService: ShoppingListService) {}

  // getRecipes() {
  //   return this.recipes.slice();
  // }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.slService.addIngredients(ingredients);
  // }
}
