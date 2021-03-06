import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { Product } from "./product.model"

@Injectable({
  providedIn: 'root'
})
export class NewproductService {

  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  addProduct(product: Product) {
    
    this.http.post<{message: string, id: string,       
       }>("api/product/new", product)
        .subscribe(responseData => {
        const id = responseData.id;
        product.id = id;
        this.products.push(product);
        /*this.postsUpdated.next([...this.posts]);*/
      });   
    console.log('almost there');
    console.log(product.name);
    }

}
