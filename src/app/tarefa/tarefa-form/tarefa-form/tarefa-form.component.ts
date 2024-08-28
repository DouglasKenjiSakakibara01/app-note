import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ProvedorService } from 'src/app/servicos/provedor.service';
import localePtExtra from '@angular/common/locales/extra/pt';


@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.scss'],
})
export class TarefaFormComponent  implements OnInit {
  public data: string|null = null;
  public horario: string = '';
  public titulo: string = '';
  public descricao: string = '';

  public tituloInvalido: boolean = false;
  public descricaoInvalido: boolean = false;
  public mesInicial: any;
  public anoInicial: any;
  
  constructor(private navCtrl: NavController, private modalCtrl: ModalController,
    private router : Router, private tarefaService: ProvedorService, private datePipe: DatePipe) { }

  ngOnInit() {
    
  }

  RetornaPagina() {
    this.navCtrl.back();
  }

  AdicionarTarefa(){
    
    if(this.titulo && this.descricao) {
      let tarefa={
        titulo: this.titulo,
        descricao: this.descricao,
        horario: this.horario,
        data: this.datePipe.transform(this.data, 'dd/MM/yyyy')
      }
      console.log(tarefa);
      this.tarefaService.InsereTarefa(tarefa).subscribe(data=>{
          console.log(data)
          this.router.navigate(['/inicio']);
      }
        ), () => {
          console.log('erro');

        };
    }
    else {
      this.descricaoInvalido = true;
      this.tituloInvalido = true
      
    }
  }

  BuscarTarefa () {
    this.tarefaService.BuscarTarefa().subscribe(data=>{
      console.log(data);
    })

  }

}
