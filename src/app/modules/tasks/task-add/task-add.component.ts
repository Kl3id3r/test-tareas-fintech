import { Task } from './../resources/Task';
import { TasksComponent } from './../tasks.component';
import { addTask, upsertTask } from './../state/tasks.actions';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Host, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NUMBER_PATTERN, ALPHANUM_PATTERN } from './../../../shared/app.regexs';
import { AppState } from 'src/app/store';

import * as formTaskViewModel from '../state/tasks.selectors';
import { TaskService } from '../resources/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskAddComponent implements OnInit, OnDestroy, OnChanges {
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
          Validators.maxLength(50),
          Validators.pattern(ALPHANUM_PATTERN)
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
  }

  ngOnChanges(value: any): void {
    if (this.taskId !== undefined) {
      this.loadFormUpdate(this.taskId);
    }
  }


  ngOnDestroy(): void {
    this.obs_vm$?.unsubscribe();
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
    });
  }

  handleSubmit(): void {
    if (this.taskId == undefined && this.form.get('id')) {
      this.form.removeControl('id');
    }
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.taskId !== undefined ? (
        this.store.dispatch(upsertTask({ task: { ...this.form.value } })),
        this._appTasks.taskId = undefined
      ) : (
        this.store.dispatch(addTask({ task: { ...this.form.value } }))
      );
      this.form.reset();
    }
    return;
  }
}
