import { Injectable } from '@angular/core';
import { Foods } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return[
    
      {
        id:1,
        name:'potato',
        price:2,
       favourite:true,
        star:2,
        tags:['fastfood,frie'],
        imageurl:'assets/a1.jpeg',
        cookTime:15-20,
        origins:['belgium','paris'],
      },
      
      {
        id:2,
        name:'potato',
        price:2,
        favourite:true,
        star:2,
        tags:['fastfood,frie'],
        imageurl:'assets/a2.jpeg',
        cookTime:15-20,
        origins:['belgium','paris']
      },
      
      {
        id:3,
        name:'potato',
        price:2,
        favourite:true,
        star:2,
        tags:['fastfood,frie'],
        imageurl:'assets/a3.webp',
        cookTime:15-20,
        origins:['belgium','paris'],
      },
      {
      id:4,
        name:'potato',
        price:2,
       favourite:true,
        star:2,
        tags:['fastfood,frie'],
        imageurl:'assets/a4.webp',
        cookTime:15-20,
        origins:['belgium','paris'],
      },
      
    
      {
        id:5,
        name:'potato',
        price:2,
       favourite:true,
        star:2,
        tags:['fastfood,frie'],
        imageurl:'assets/a5.jpeg',
        cookTime:15-20,
        origins:['belgium','paris']
      },
      
      
      
      {
        id:6,
        name:'potato',
        price:2,
       favourite:true,
        star:2,
        tags:['fastfood,frie'],
        imageurl:'assets/a6.jpeg',
        cookTime:15-20,
        origins:['belgium','paris']
      },
      
      
   
      {
        id:7,
        name:'potato',
        price:2,
       favourite:true,
        star:2,
        tags:['fastfood,frie'],
        imageurl:'assets/a7.jpeg',
        cookTime:15-20,
        origins:['belgium','paris']
      },
      
      {
        id:8,
        name:'potato',
        price:2,
       favourite:true,
        star:2,
        tags:['fastfood,frie'],
        imageurl:'assets/a8.webp',
        cookTime:15-20,
        origins:['belgium','paris'],
      },
    ];
  }
}
