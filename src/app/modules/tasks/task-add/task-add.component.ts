import { Task } from './../resources/Task';
import { TasksComponent } from './../tasks.component';
import { addTask, upsertTask } from './../state/tasks.actions';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Host, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NUMBER_PATTERN, ALPHANUM_PATTERN } from './../../../shared/app.regexs';
import { AppState } from 'src/app/store';

import * as formTaskViewModel from '../state/tasks.selectors';
import { TaskService } from '../resources/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskAddComponent implements OnInit, OnChanges {
  form: FormGroup;
  statusList: any[] = [];
  obs_vm$: Subscription | undefined;
  vm$: Observable<formTaskViewModel.TasksViewModel>;
  @Input() taskId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    @Host() private _appTasks: TasksComponent,
    private taskService: TaskService
  ) {
    this.form = this.fb.group({
      nombre: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(ALPHANUM_PATTERN)
        ],
      ],
      descripcion: [
        undefined, [
          Validators.required,
          Validators.maxLength(150)
        ],
      ],
      estatus: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(1),
          Validators.pattern(NUMBER_PATTERN)
        ]
      ],
    });

    this.vm$ = this.store.pipe(
      select(formTaskViewModel.selectTasksViewModel)
    );
  }

  ngOnInit(): void {
    this.loadStatus();
    if (this.taskId !== undefined) {
      this.loadFormUpdate(this.taskId);
    }
  }

  ngOnChanges(value: any): void {
    if (this.taskId !== undefined) {
      this.loadFormUpdate(this.taskId);
    }
  }

  get f(): any {
    return this.form.controls;
  }

  loadStatus() {
    this.statusList = [
      { id: 0, label: 'Pendiente' },
      { id: 1, label: 'Completada' },
    ]
  }

  loadFormUpdate(id: number) {
    this.taskService.getTask(id).then(({ nombre, descripcion, estatus }) => {
      this.form.setControl('id', new FormControl(id, [Validators.required]));
      this.form.patchValue({
        nombre,
        descripcion,
        estatus
      });
      this.form.markAllAsTouched();
    });
  }

  handleSubmit(): void {
    this.form.markAllAsTouched();
    const task = { ...this.form.value };
    if (this.taskId !== undefined) {
      this.form.removeControl('id');
      if (this.form.valid) {
        this.store.dispatch(upsertTask({ task }));
        this._appTasks.taskId = undefined;
        this.onCancel();
      }
    } else {
      if (this.form.valid) {
        {
          this.store.dispatch(addTask({ task }));
          this.onCancel();
        }
      }
      return;
    }
  }

  onCancel() {
    this.form.removeControl('id');
    this.taskId = undefined;
    this.form.reset();
  }
}
