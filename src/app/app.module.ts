import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { TarefaComponent } from './tarefa/tarefa-page/tarefa.component';
import { TarefaFormComponent } from './tarefa/tarefa-form/tarefa-form/tarefa-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, InicioComponent, TarefaComponent, TarefaFormComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, FormsModule, HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
