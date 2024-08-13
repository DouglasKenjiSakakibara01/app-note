import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TarefaComponent } from './tarefa/tarefa-page/tarefa.component'
import { TarefaFormComponent } from './tarefa/tarefa-form/tarefa-form/tarefa-form.component';
const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,

  },
  {
    path: 'tarefa',
    component: TarefaComponent,

  },  
  {
    path: 'tarefa-form',
    component: TarefaFormComponent,

  }  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
