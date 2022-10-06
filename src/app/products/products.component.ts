import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Shared_Classes&types/category';
import { DiscountOffers } from '../Shared_Classes&types/discountOffers';
import { IProduct, Person } from '../Shared_Classes&types/product'
import { FormGroup, FormControl, Validators } from "@angular/forms";
//import {myID} from "../pipes/birth-date.pipe";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  myID:string="29609042800728"
  addform: FormGroup;
  addperson:FormGroup;

  Discount: DiscountOffers = DiscountOffers.three

  StoreName: string = "Online Store"

  StoreLogo: string = "../../assets/logo.jpg"

  ProductList: IProduct[] = []

  category: ICategory[] = []

  person:Person[] = []

  ClientName: string = ""

  IsPurshased: boolean = true
  products: any;

  constructor() {
    this.addperson= new FormGroup({
      name:new FormControl("",[Validators.required]),
      userName:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required,Validators.min(6)])
      
    })
    this.addform = new FormGroup(
      {
        categoryId: new FormControl("", [Validators.required]),
        name: new FormControl("", [Validators.required, Validators.minLength(5)]),
        quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
        price: new FormControl(1, [Validators.required, Validators.min(1)]),
        img: new FormControl("", [Validators.required, Validators.pattern("^https?:\/\/[A-Za-z0-9:.]*([\/]{1}.*\/?)$")]),
      }
    )
    this.ProductList = [
      {
        id: 1,
        name: "IPhone",
        quantity: 33,
        price: 11000,
        img: "../../assets/61l9ppRIiqL._AC_SL1500_.jpg",
        categoryId:1
      },
      {
        id: 2,
        name: "Samsong",
        quantity: 4500,
        price: 55,
        img: "../../assets/51QaC1yXdhL._AC_SL1000_.jpg",
        categoryId:2
      },
      {
        id: 3,
        name: "IPhone",
        quantity: 30,
        price: 55000,
        img: "../../assets/6135J1TQCuL._AC_SL1500_.jpg",
        categoryId:3
      },
      {
        id: 4,
        name: "IPhone",
        quantity: 33,
        price: 16000,
        img: "./../assets/iPhone_13_Pro_ALP_1.webp",
        categoryId:4
      }
    ]

    this.category = [
      {
        id: 11,
        name: "IPhone"
      },
      {
        id: 22,
        name: "IPad"
      },
      {
        id: 33,
        name: "Tablete"
      },
      {
        id: 44,
        name: "Devices"
      }
    ]
  }

  ngOnInit(): void {
  }


  ToShow = false;
  Show() {
    if (this.Discount == DiscountOffers.one)
      this.ToShow = false
    else
      this.ToShow = true

  }

  handelClick(val:any){
    console.log(val)
    this.ClientName = val;
  }


  ShowMsg:boolean = false;
  ShowTable:boolean = true;

  ShowUp(){
    this.ShowMsg=!this.ShowMsg
    this.ShowTable=!this.ShowTable
  }



  add() {
    //console.log(this.addform.value)
    let prd: IProduct = {
      id: this.ProductList.length,
      name: this.addform.value["name"],
      img: this.addform.value["img"],
      quantity: parseFloat(this.addform.value["quantity"]),
      price: parseFloat(this.addform.value["price"]),
      categoryId: this.addform.value["categoryId"],
    }
    this.ProductList.push(prd);
  }

  register(){
    alert(this.addperson.value)
  }

}
