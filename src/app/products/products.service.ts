import { Injectable } from "@angular/core";
import { IProduct } from "./Iproduct";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable,tap,catchError } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class ProductService{

constructor(private http:HttpClient){}

    private urlServer:string='api/products/products.json';
    getProduct():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.urlServer);
    }
   private handleError(handleError: HttpErrorResponse):Observable<never> {
        throw new Error("Method not implemented.");
    }

}