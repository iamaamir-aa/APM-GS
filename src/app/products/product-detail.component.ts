import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle:string="Product Details";
  constructor(private router:Router, private route:ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
  const id:number=Number(this.route.snapshot.paramMap.get('id'));
  }
  onBack():void{

    this.toastr.error('Something went wrong!','Error',{
tapToDismiss:true,
closeButton:true,
newestOnTop:true,
timeOut:5000,
extendedTimeOut:1000,
disableTimeOut:false,
easeTime:300
    });

    }
}
