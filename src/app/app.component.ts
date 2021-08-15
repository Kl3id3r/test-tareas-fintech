// Vendors
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private navigationObserver: Subscription | undefined

  constructor(
    private router: Router,
    private spiner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.navigationObserver = this.router.events
      .subscribe((event: any) => {
        if (event instanceof NavigationStart) {
          this.spiner.show();
        }
        else if (event instanceof NavigationEnd) {
          this.spiner.hide();
        }
      });
  }

  ngOnDestroy() {
    this.navigationObserver?.unsubscribe();
  }
}
