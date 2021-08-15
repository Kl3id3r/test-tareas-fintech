import { MenuItems } from '../../../../core/models/menuItems';
import { MenuService } from '../../../../core/services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  items: MenuItems[] = [];
  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.items = this.menuService.items;
  }
}
