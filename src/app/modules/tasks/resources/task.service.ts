// Vendors
import { Injectable } from '@angular/core';
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
    const localTasks = JSON.parse(localStorage.getItem('localtasks') || '[]');
    if (localTasks.length) {
      this.tasks = localTasks;
    }
    return new Promise((res, rej) => {
      setTimeout(() => res(this.tasks), 1000);
    });
  }

  createTask(task: Task): Promise<Task> {
    task = {
      ...task,
      id: (this.tasks.length + 1),
      estatus: Number(task.estatus)
    };
    this.tasks = [...this.tasks, task];
    localStorage.setItem('localtasks', JSON.stringify(this.tasks));
    return new Promise((res, rej) => {
      setTimeout(() => res(task), 1000)
    });
  }

  getTask(id: number): Promise<Task> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const filtered = this.tasks.find(e => e.id === id);
        filtered ? res(filtered) : rej({})
      }, 1000)
    });
  }

  editTask(task: Task): Promise<Task> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        task = { ...task, estatus: Number(task.estatus) };
        const findElement = this.tasks.find(e => e.id == task.id);
        const updElement = { ...findElement, ...task };
        if (findElement) {
          this.tasks = [...this.tasks.filter(e => e.id !== task.id), updElement];
          localStorage.setItem('localtasks', JSON.stringify(this.tasks));
        }
        res(task);
      }, 1000)
    });
  }

  deleteTask(id: number): Promise<boolean> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.tasks = this.tasks.filter(e => e.id !== id);
        localStorage.setItem('localtasks', JSON.stringify(this.tasks));
        res(true)
      }, 1000);
    });
  }
}
