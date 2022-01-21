import { createReducer, on } from '@ngrx/store';
import { loadCoffeesSuccess } from './coffee.actions';


const initialState: any = {};

// export const coffeeReducer = createReducer(
//     initialState,
    // on(loadCoffeesSuccess, (state, { coffees }) => coffees.reduce((acc, coffee) => ({
    //     ...acc,
    //     [coffee.id]: coffee
    // }), {}))
    // on(loadCoffeesSuccess,(state, {coffees} =>({
    //     ...state
    // })
    // )
// );