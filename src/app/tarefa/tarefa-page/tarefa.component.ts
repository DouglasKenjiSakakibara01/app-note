import { DatePipe } from '@angular/common';
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
  public editar: boolean = false;
  public id: any;
  public titulo: string = '';
  public descricao: string ='';
  public data: string | null = null;
  public horario: string | null = null;

  constructor(private navCtrl: NavController, private router : Router, private tarefaService: ProvedorService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.BuscarTarefas();
   
  }

  RetornaPagina() {
    this.navCtrl.back();
  }

  Rota(rota:string) {
    this.router.navigate(['/'+rota]);
  }

  BuscarTarefas() {
    this.tarefaService.BuscarTarefa().subscribe(data=>{
      this.listaTarefa = data;
      console.log(this.listaTarefa.length);
  })
  }
  
  checkboxClick(event : Event) {
    event.stopPropagation();
    console.log('stop');
  }

  EditarTarefa(tarefa: any) {
    console.log('entrou editar');
    this.editar = true; 
    this.data = tarefa.data;
    this.titulo = tarefa.titulo;
    this.horario = tarefa.horario;
    this.id = tarefa.id;
    this.descricao = tarefa.descricao;
    
  }

  AtualizarTarefa() {
    let tarefaNovo={
      titulo: this.titulo,
      descricao: this.descricao,
      horario: this.horario,
      data: this.datePipe.transform(this.data, 'dd/MM/yyyy')
    }

    this.tarefaService.AtualizaTarefa(this.id, tarefaNovo).subscribe(data =>{
      console.log(data);
      this.BuscarTarefas();
      this.editar = false;
    }  
    );
  }




}
