import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	currentDate: string;
  myTask = '';
  addTask: boolean;
  tasks = [];
  constructor(	public afDB: AngularFireDatabase,    ) {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' } as const;
    this.currentDate = date.toLocaleDateString('fr-FR', options);
   // a chaque initialisation de constructor il fait un appel vers le methode gettasks() pour lister les taches
    this.getTasks();
   }


   // Ajouter une tache to Tasks fBD 
   addTaskToFirebase() {
     console.log('my Task ' +this.myTask)
    this.afDB.list('Tasks/').push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false
    });
    this.showForm() ;
  }
  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }

  // Méthode to get all taches from fBD
  getTasks() {
    this.afDB.list('Tasks/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.tasks = [];
      actions.forEach(action => {
        this.tasks.push({
          key: action.key,
          text: action.payload.exportVal().text,
          hour: action.payload.exportVal().date.substring(11, 16),
          checked: action.payload.exportVal().checked
        });
      });
    });

  }

  changeCheckState(ev: any) {
    console.log('checked: ' + ev.checked);
  }

//remove tache from Tasks fbd
  deleteTask(task: any) {
    this.afDB.list('Tasks/').remove(task.key);
  }
  ngOnInit() {
  }

}
