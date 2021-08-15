import { HeaderService } from '../../core/services/header.service';
// Vendors
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  taskId: number | undefined;

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.setTitle('LISTA DE TAREAS');
  }

}
