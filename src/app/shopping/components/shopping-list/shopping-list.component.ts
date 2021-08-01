import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AddItemAction, RemoveItemAction } from '../../actions/shopping.actions';
import { ShopAppState } from '../../models/app-state.model';
import { ShoppingItem } from '../../models/shopping-item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<ShopAppState>) { }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping);
    // this.shoppingItems = this.store.select('shopping');
  }

  addItem() {
    if (!this.newShoppingItem.name) return;
    this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem))
    // this.store.dispatch(new AddItemAction({ id: '123', name: 'Dr. Pepper'}))

    // setTimeout(() => this.addItem(), 2000);
    // this.text = '';
    this.newShoppingItem = { id: '', name: '' };

  }

  removeItem(id: string) {
    this.store.dispatch(new RemoveItemAction(id));
  }

}
