import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from "../../interfaces/hero.interface";
@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent  {

  public isUpperCase : boolean = false;

  public heroes : Hero[] = [
    {
      name : 'superman',
      canFly : true,
      color : Color.blue
    },
    {
      name : 'Batman',
      canFly : false,
      color : Color.black
    },
    {
      name : 'Daredevil',
      canFly : false,
      color : Color.red
    },
    {
      name : 'Robin',
      canFly : false,
      color : Color.green
    },
    {
      name : 'Linterna Verde',
      canFly : true,
      color : Color.green
    },
  ]

  


  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase
  }
    

}
