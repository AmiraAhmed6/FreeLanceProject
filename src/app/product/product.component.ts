import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  filterTerm!: string;
  image :any[]=[];
  ngOnInit(): void {
    this.image.push({source:'../../assets/product1.jpg'});
    this.image.push({source:'../../assets/product2.jpg'});
    this.image.push({source:'../../assets/product3.jpg'});
    this.image.push({source:'../../assets/product4.jpg'});
    this.image.push({source:'../../assets/product5.jpg'});
    this.image.push({source:'../../assets/product6.jpg'});
  }

}
