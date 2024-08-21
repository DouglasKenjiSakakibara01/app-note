import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProvedorService } from 'src/app/servicos/provedor.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss'],
})
export class TarefaComponent  implements OnInit {

  public listaTarefa:any;

  constructor(private navCtrl: NavController, private router : Router, private tarefaService: ProvedorService) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.BuscarTarefa();
   
  }

  RetornaPagina() {
    this.navCtrl.back();
  }

  Rota(rota:string) {
    this.router.navigate(['/'+rota]);
  }

  BuscarTarefa () {
    this.tarefaService.BuscarTarefa().subscribe(data=>{
      this.listaTarefa = data;
      console.log(this.listaTarefa.length);
  })
  }




}
