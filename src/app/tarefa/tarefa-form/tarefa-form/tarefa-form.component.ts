import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.scss'],
})
export class TarefaFormComponent  implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  RetornaPagina() {
    this.navCtrl.back();
  }

}
