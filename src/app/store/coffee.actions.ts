import {createAction, props} from '@ngrx/store';


export const loadCoffees = createAction('[Coffee List] Load Coffees');
export const loadCoffeesSuccess = createAction('[Coffee List] Load Coffees Success', 
props<{coffees:any}>());
export const loadCoffeesError = createAction('[Coffee List] Load Coffees Error');