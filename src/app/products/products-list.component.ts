import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./Iproduct";
import { ProductService } from "./products.service";
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
selector:"pm-product-list",
templateUrl:"./products-list.component.html",
styleUrls:['./products-list.component.css']
})



export class ProdcutListComponent implements OnInit, OnDestroy{



  ngOnInit(): void {
  


  this.sub= this.productService.getProduct().subscribe({
  next:(products)=>{
    this.products=products;
    this.filteredList=this.products;},
  error:err=>this.errorMessage=err
});
  //  this.products=this.productService.getProduct();

  }
pageTitle:string="Product List";
imageWidth:number=50;
imageMargin:number=2;
showImage:boolean=false;
//listFilter:string="cart";
errorMessage:String='';
sub! :Subscription;

private _listFilter='';

filteredList:IProduct[]=[];

constructor(private productService:ProductService){}
  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }



get listFilter():string{
  return this._listFilter;
}
set listFilter(val:string){
this._listFilter=val;
this.filteredList=this.performFilter(val);
console.log("Value cart set on setter "+val);
}

products:IProduct[]=[];




  toggleImage(){
    this.showImage=!this.showImage;
  }

performFilter(val:string):IProduct[]{
  val=val.toLocaleLowerCase();

  return this.products.filter((product:IProduct)=> product.productName.toLocaleLowerCase().includes(val));
}
getEvent(val:string){
  this.pageTitle=this.pageTitle+" "+val;
}

}