import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyBX1o5VMgTIFyasgnVFVcVmJ0Lp104cZdI",
  authDomain: "ionic2do-215e9.firebaseapp.com",
  databaseURL: "https://ionic2do-215e9.firebaseio.com",
  storageBucket: "ionic2do-215e9.appspot.com",
  messagingSenderId: "882274445339"
};

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
