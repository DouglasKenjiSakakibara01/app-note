import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss'],
})
export class TarefaComponent  implements OnInit {

  constructor(private navCtrl: NavController, private router : Router) { }

  ngOnInit() {}
  RetornaPagina() {
    this.navCtrl.back();
  }
  Rota(rota:string) {
    this.router.navigate(['/'+rota]);
  }


}
