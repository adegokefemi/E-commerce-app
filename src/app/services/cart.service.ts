import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []
  // BehavoiorSubject is use to hold, and emit or pass common data(productList) throughout the components,
  //  or serve as subscriber, or observable and need to be initialize, initial data,here [].
  public productList = new BehaviorSubject<any>([]);
  constructor() { }

  // BehaviorSubject is used to 'get' and 'set' the product below.
  getProducts(){
    // Observable is use to get all the data in the 'productList', whenever we call the 'getProducts', 
    // we can get/subscibe to the data in the 'productList'.
    return this.productList.asObservable();
  }

  // The 'setProduct' is Optional, if ommit, every other code still work find if comment out.
  setProduct(product : any){
    this.cartItemList.push(...product);
    // BehaviorSubject is used to emit/update the 'productList' by passing the product using the 'next'.
    this.productList.next(product);
  }

  addToCart(product : any){
    this.cartItemList.push(product);
    // BehaviorSubject is use here also to emit/update the 'productList' with 'cartItemList' using 'next'.
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a :any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a: any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })
    // This is used to update the product remove from the cartIcon
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = [];
    // Emit or pass all productList into the 'cartItemList' to clear all item.
    this.productList.next(this.cartItemList);
  }
}
