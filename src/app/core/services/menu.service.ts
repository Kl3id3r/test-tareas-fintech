// Vendors
import { Injectable } from '@angular/core';

// Models
import { MenuItems } from '../models/menuItems';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  items: MenuItems[] = [];

  constructor() {
    this.getItems();
  }

  private getItems() {
    this.items = [
      {
        id: 0,
        label: 'Inicio',
        url: '/tareas'
      }
    ];
  }
}
