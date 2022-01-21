import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProdlistComponent } from './product/productList/prodlist.component';
import { TableModule } from 'primeng/table';

import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './store/coffee.effects';
import { StoreModule } from '@ngrx/store';
// import { coffeeReducer } from './store/coffee.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProdlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
        TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
