import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IResponse } from './../../../core/models/response';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {
      id: 0,
      nombre: 'Tarea de prueba',
      descripcion: 'Descripcion de prueba',
      estatus: 0
    }
  ];
  constructor() { }

  getTasks(): Promise<Task[]> {
    return new Promise((res, rej) => {
      // Generar error cuando haya 15 items
      setTimeout(() => {
        this.tasks.length < 15 ? res(this.tasks) : rej('¡Ocurrió un error al obtener tareas!')
      }, 450);
    });
  }

  createTask(task: Task): Promise<IResponse> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        task ? res({ data: task }) : rej('¡Error al crear tarea!');
      }, 1000)
    });
  }

  updateTask(id: number, task: Task): Promise<IResponse> {
    // return new Observable((next, err) => {
    //   next({ data: 's' });

    //   err('Some');
    // });

    return new Promise((res, rej) => {
      setTimeout(() => {
        const filtered = this.tasks.find(e => e.id === id);
        if (filtered) {
          const data = { ...filtered, ...task };
          res({ data });
        } else {
          rej('¡Error al modificar tarea!');
        }
      }, 1000)
    });
  }

  deleteTask(id: number): Promise<IResponse> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({ data: true })
      }, 1000);
    });
  }
}
