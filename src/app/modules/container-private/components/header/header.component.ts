// Vendors
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// Service
import { HeaderService } from '../../../../core/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  obstitle: Subscription | undefined;
  title: string = 'BIENVENIDO';

  constructor(
    private headerService: HeaderService
  ) {
    this.obstitle = this.headerService.title.subscribe(title => this.title = title);
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.obstitle?.unsubscribe();
  }
}
