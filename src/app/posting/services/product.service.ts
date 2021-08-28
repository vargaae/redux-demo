import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import { Recipe } from './../recipes.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(recipe) {
    return this.db.list('/recipes').push(recipe);
  }

  getAll() {
    return this.db.list<Recipe>('/recipes')
        .snapshotChanges()
        .pipe(
            map(changes =>
                changes.map(i => {
                    const data = i.payload.val() as Recipe;
                    const id = i.payload.key;
                    return { id, ...data };
                })
            )
        );
}

  get(recipeId) {
    return this.db.object('/recipes/' + recipeId).valueChanges();
  }

  update(recipeId, recipe) {
    return this.db.object('/recipes/' + recipeId).update(recipe);
  }

  delete(recipeId) {
    return this.db.object('/recipes/' + recipeId).remove();
  }

}
