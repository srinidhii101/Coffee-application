import {ProductService} from '../product-serivce';
import {Injectable} from '@angular/core';
import {loadCoffees, loadCoffeesError, loadCoffeesSuccess} from './coffee.actions';
import {catchError, map, switchMap, mergeMap} from 'rxjs/operators';
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
// import { Observable } from 'rxjs/dist/types/internal/Observable';


@Injectable()

export class CoffeeEffects {
//     constructor(
//         public actions$: Actions,
//         private productService: ProductService
//       ) {}

  loadCoffee$ = createEffect(() =>
    this._actions.pipe(
      ofType(loadCoffees),
      switchMap(() => this.productService.getProducts().pipe(
        map(coffees => loadCoffeesSuccess({coffees})),
        // catchError(() => of(loadCoffeesError()))
      ))
    )
  );


// loadCoffee$ = createEffect(() => this._actions.pipe(
//     ofType(loadCoffees),
//     mergeMap(() => this.productService.getProducts()
//       .pipe(
//         map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
//         // catchError(() => EMPTY)
//       ))
//     )
//   );
 
  constructor(
    private _actions: Actions,
    private productService: ProductService
  ) {}
}
  