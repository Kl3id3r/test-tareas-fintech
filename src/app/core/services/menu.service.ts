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
    const items = [
      {
        id: 0,
        label: 'Tareas',
        url: '/tareas',
        iconUrl: "assets/icons/book.svg"
      }
    ];
    this.items = items;
  }
}
