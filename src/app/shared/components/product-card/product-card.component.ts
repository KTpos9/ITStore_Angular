import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{
  @Input()
  img: string;
  @Input()
  title: string;
  @Input()
  desc: string;
  @Input()
  price: string;

  constructor(){
    this.title = 'hello world';
    this.desc = 'desc';
    this.price = '10,000'
  }
  ngOnInit(): void {

  }

}
