import { Injectable } from '@angular/core';
import { Foods } from './food';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return[
    
      {
        id:1,
        name:'potato1',
        price:2,
        favourite:true,
        star:2,
        tags:['fastfood'],
        imageurl:'assets/a1.jpeg',
        cookTime:15-20,
        origins:['belgium','paris'],
      },
      
      {
        id:2,
        name:'potato2',
        price:2,
        favourite:true,
        star:2,
        tags:['fastfood'],
        imageurl:'assets/a2.jpeg',
        cookTime:15-20,
        origins:['belgium','paris']
      },
      
      {
        id:3,
        name:'potato3',
        price:2,
        favourite:true,
        star:2,
        tags:['fastfood','Frie'],
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
        tags:['fastfood,Frie'],
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
  getAllFoodsByTag(tag:string):Foods[]{
    if(tag=='all')
    return this.getAll()
    else {
      return this.getAll().filter(food=>food.tags?.includes(tag))
    }

  }
  getAllTag():Tag[]{
    return [
      {name:'all',count:14},
      {name:'FastFood',count:4},
      {name:'Pizza',count:2},
      {name:'Lunch',count:3},
      {name:'SlowFood',count:2},
      {name:'Hamburger',count:1},
      {name:'Frie',count:5},
      {name:'soup',count:1}

    ];
  }
  getFoodById(id :number):Foods{
return this.getAll().find(food=>food.id==id)!;
  }
}
