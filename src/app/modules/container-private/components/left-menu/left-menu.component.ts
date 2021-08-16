import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { MenuItems } from '../../../../core/models/menuItems';
import { MenuService } from '../../../../core/services/menu.service';
import { Component, OnInit } from '@angular/core';
import { logout } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  items: MenuItems[] = [];
  show: boolean = false;

  constructor(
    private menuService: MenuService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.items = this.menuService.items;
  }

  logout() {
    this.store.dispatch(logout())
  }
}
