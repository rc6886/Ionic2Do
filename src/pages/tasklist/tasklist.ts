import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { Task } from './task';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
  tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.tasks = af.database.list('/tasks');
  }

  addItem() {
    let theNewTask: string = prompt("New Task");

    if (theNewTask != '') {
      this.tasks.push({
        title: theNewTask,
        status: "open"
      });
    }
  }

  markAsDone(slidingItem: ItemSliding, task: Task) {
    this.tasks.update(task.$key, {status: 'done'});
    slidingItem.close();
  }

  removeTask(slidingItem: ItemSliding, task: Task) {
    this.tasks.remove(task.$key);
    slidingItem.close();
  }
}
