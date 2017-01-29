import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { Task } from './task';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Dialogs } from 'ionic-native';

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
    Dialogs.prompt('Add a Task', 'Ionic2Do', ['Ok', 'Cancel'], '')
      .then(result => {
        if (result.buttonIndex === 1 && result.input1 !== '') {
          this.tasks.push({title: result.input1, status: 'open'});
        }
      });
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
