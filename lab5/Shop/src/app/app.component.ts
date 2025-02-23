import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Smartphones', 'Laptops', 'TVs', 'Accessories'];
  products: { id: number, name: string, category: string, likes: number, imageUrl: string, isLiked?: boolean}[];

  selectedCategory: string | null = null;
  selectedProducts: any[] = [];

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.selectedProducts = this.products.filter(product => product.category === category);
  }

  likeProduct(product: any) {
    console.log("app.likeProduct worked success");
    if(!product.isLiked)
    {
      product.likes++;
    }
    else{
      product.likes--;
    }
    product.isLiked = !product.isLiked;
    // console.log(product);
  }

  removeProduct(product: any) {
    this.products = this.products.filter(p => p.id !== product.id);
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id);
    console.log("app.removeProduct worked success");
  }

  constructor(){
    this.products = [
    { id: 1, name: 'Iphone 16 Pro Max', category: 'Smartphones', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large'},
    { id: 2, name: 'Iphone 13', category: 'Smartphones', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large' },
    { id: 3, name: 'Iphone 15', category: 'Smartphones', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large'},
    { id: 4, name: 'Google Pixel 9', category: 'Smartphones', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hd7/86895780560926.jpg?format=gallery-medium' },
    { id: 5, name: 'Google Pixel 7', category: 'Smartphones', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/haf/63603321208862.jpg?format=gallery-large'},
    { id: 6, name: 'ThundeRobot 911 X Wild Hunter G2 Pro 15.6', category: 'Laptops', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-large'},
    { id: 7, name: 'Apple MacBook Air 13 2022 13.6', category: 'Laptops', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-large' },
    { id: 8, name: 'Acer Aspire 3 15.6', category: 'Laptops', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-large'},
    { id: 9, name: 'Acer Gadget E10 ETBook 14', category: 'Laptops', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h68/86642069504030.jpg?format=gallery-large' },
    { id: 10, name: 'Apple MacBook Air 13 2024 13.6', category: 'Laptops', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h85/85538458861598.jpg?format=gallery-large'},
    { id: 11, name: 'Samsung UE43T5300AUXCE ', category: 'TVs', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-large'},
    { id: 12, name: 'LG 55UT80006LA ', category: 'TVs', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h7b/86276597415966.jpg?format=gallery-large'},
    { id: 13, name: 'Xiaomi A 2025 L43MA-AURU ', category: 'TVs', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h75/86416093118494.jpg?format=gallery-large' },
    { id: 14, name: 'Яндекс YNDX-00075 ', category: 'TVs', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p5b/pc4/25408367.jpg?format=gallery-large'},
    { id: 15, name: 'Samsung UE55DU7100UXCE ', category: 'TVs', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-large' },
    { id: 16, name: 'Apple AirPods 3 ', category: 'Accessories', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-large'},
    { id: 17, name: 'Apple AirPods Pro 2', category: 'Accessories', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large'},
    { id: 18, name: 'Apple AirPods 2', category: 'Accessories', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h5a/63761265426462.jpg?format=gallery-large' },
    { id: 19, name: 'Apple AirPods Max 2', category: 'Accessories', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-large'},
    { id: 20, name: ' Samsung Galaxy Buds2 Pro', category: 'Accessories', likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h75/64421533548574.jpg?format=gallery-large' },
    ]
}
}