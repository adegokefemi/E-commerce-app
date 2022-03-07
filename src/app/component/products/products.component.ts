import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // This declaration means productList type 'any' being a typescript.
  public productList : any ;
  searchKey:string="";
  // The services is inject into the constructor before it can be use. 
  constructor(private apiService : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.apiService.getProduct()
    // Subscribe get all the values or data in the 'res'.
    .subscribe(res=>{
      this.productList = res;

      // This is used to add quantity and total to the object (productList) using 'Object.assign'.
      this.productList.forEach((item: any) => {
        Object.assign(item, {quantity:1, total:item.price});
      });
    })
  }
  // This 'addtocart' function is used to add item to the cart from the products.
  addtocart(item: any){
    this.cartService.addToCart(item);
  }

}
