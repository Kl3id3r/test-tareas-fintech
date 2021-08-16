import { AppState } from './../../../../store/index';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

// State
import * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';
import * as fromTaskSelectors from '../../../tasks/state/tasks.selectors';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent implements OnInit {
  vm$: Observable<fromAuthSelectors.UserProfile>;
  taskspending$: Observable<fromTaskSelectors.TasksPendingViewModel>;

  styleWidth: string = '0';

  constructor(
    private store: Store<AppState>
  ) {
    this.vm$ = this.store.pipe(select(fromAuthSelectors.selectUserProfile));
    this.taskspending$ = this.store.pipe(select(fromTaskSelectors.selectTasksPending));

    this.taskspending$.subscribe(data => {
      // Agregar calculo valido de porcentaje
      this.styleWidth = `${((data.taskspending.length * 100) / data.tasks.length)}%`;
    });
  }

  ngOnInit() {
  }

}
