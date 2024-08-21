import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {

  public url: string = 'http://localhost:8081';

  constructor(private http : HttpClient) { }

  InsereTarefa(tarefa:any) {
    return this.http.post(`${this.url}/tarefa/insere`, tarefa);
  }

  BuscarTarefa() {
    return this.http.get(`${this.url}/tarefa/lista-tarefa`);
  }


}
