import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  title = new BehaviorSubject('');

  constructor() { }

  setTitle(title: string): void {
    this.title.next(title);
  }

  getTitle(): string {
    return this.title.value;
  }
}
