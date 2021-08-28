import { Post } from './../models/post.model';
// import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, Effect, ofType } from '@ngrx/effects';
import { AngularFireDatabase } from '@angular/fire/database';
import { EMPTY, of, Observable } from 'rxjs';
import { map, mergeMap, catchError, delay } from 'rxjs/operators';
// import { MoviesService } from './movies.service';
import * as postActions from '../actions/post.actions';
import { RecipeService } from '../services/recipe.service';
export type Action = postActions.All;

@Injectable()
export class PostEffects {
  // getPost$ = createEffect(() => this.actions$.pipe(
  //   ofType(postActions.GET_POST))
  // .pipe(map((action: postActions.GetPost) => action.payload ))
  // // .delay(2000) // delay to show spinner
  // mergeMap(payload => this.db.object(payload))
  // .pipe(
  //   map(post => {
  //   post.pushKey = post.$key;
  //   return new postActions.GetPostSuccess(post);
  // })));

  getPost$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.GET_POST),
    delay(2000), // delay to show spinner
    mergeMap(() => this.recipeService.get('testPost')
    // mergeMap(() => this.recipeService.getAll()
  // mergeMap(payload =>
  //   this.db.list<Post>('/posts/0', ref => ref.orderByChild('testPost')
  //   // .equalTo(payload)
  //   )
  //     .snapshotChanges()
  //     .pipe(
  //         map(changes =>
  //             changes.map(o => {
  //                 const data = o.payload.val() as Post;
  //                 const key = o.payload.key;
  //                 return { key, ...data };
  //             })
  //         )
  //     )
    // this.db.object(payload).valueChanges()
    // this.db.object(payload))
      .pipe(
        map(post =>
          // {
          //   post.pushKey = post.$key;
          //   return new postActions.GetPostSuccess(post);
          ({ type: '[Post] GET_POST_SUCCESS', payload: post })),
          // map(recipes => { recipes.pushKey = RecipesActions.$key; }),
          // }
          catchError(() => EMPTY)
      ))
    )
  );

  voteUpdate$ = createEffect(
    () =>
    this.actions$.pipe(
  // voteUpdate: Observable<Action> = this.actions$.
  ofType(postActions.VOTES_UPDATE),
  // concatLatestFrom(action => this.store.select(fromBooks.getCollectionBookIds)),
  //       tap(([action, bookCollection]) => {
  //         if (bookCollection.length === 1) {
  //           window.alert('Congrats on adding your first book!');
  //         } else {
  //           window.alert('You have added book number ' + bookCollection.length);
  //         }
  //       })
  //     ),
  //   { dispatch: false }
  // );
  // pipe(map((action: postActions.VoteUpdateAction) => action.payload ))
  mergeMap((post, val) =>
  // this.recipeService.update('votes', 'val')
  this.db.object('/posts/' + 'testPost')
  // .mergeMap(payload => this.db.object('posts/' + payload.post.pushKey)
  // .update({ payload: post, text:'Hello! I am the first NgRx-Fire Post!'
  .update({ votes: (val) }
    // votes: 'votes'
    // votes: payload.post.votes + payload.val
  )
// })
  ))
  .pipe(
    map(post =>
      ({ type: '[Post] VOTES_UPDATE_SUCCESS', payload: post })),
    catchError(() => of({ type: '[Post] VOTES_UPDATE_FAIL' }))
    // catchError(() => of (new postActions.VoteUpdateFailAction( { error: err.meassage } )) );
    ));

  constructor(
    private actions$: Actions,
    private db: AngularFireDatabase,
    private recipeService: RecipeService
  ) {}

  // Older version of implementation:
  // @Effect()
  // getPost: Observable<Action> = this.actions$.pipe(ofType(postActions.GET_POST))
  // .pipe(map((action: postActions.GetPost) => action.payload ))
  // // .delay(2000) // delay to show spinner
  // .mergeMap(payload => this.db.object(payload))
  // .pipe(
  //   map(post => {
  //   post.pushKey = post.$key;
  //   return new postActions.GetPostSuccess(post);
  // }));

  // @Effect()
  // voteUpdate: Observable<Action> = this.actions$.ofType(postActions.RECIPE_UPDATE);
  // .pipe(map((action: postsActions.RecipeUpdateAction) => action.payload ))
  // .mergeMap(payload => this.db.object('posts/' + payload.post.pushKey)
  // .update({
  //   votes: payload.post.votes + payload.val
  // })))
  // .pipe(
  //   map(() => new postActions.VoteSuccess(post);
  //   catchError(() => of (new postActions.VoteFail( { error: err.meassage } )) );

}
