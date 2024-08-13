import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss'],
})
export class TarefaComponent  implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  RetornaPagina() {
    this.navCtrl.back();
  }

}
