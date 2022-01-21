import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/product-serivce';
import { Store } from '@ngrx/store';


@Component({
    selector: 'prod-list',
    templateUrl: './prodlist.component.html',
    styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {

    constructor(public productService: ProductService) { }

    productList: any = [];
    // productusList$: Observable<any> = this.store.select(state => state.coffies);

    ngOnInit() {
        this.productService.getProducts().subscribe((e: any) => {
            let productList = []
            for (let i = 0; i < 50; i++) {
                productList.push({ ...e, item: i + 1 });
            }
            this.productList = [...productList];
        })
    }

}
