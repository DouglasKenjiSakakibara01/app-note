import { Component, OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

  Rota(rota:string) {
    this.router.navigate(['/'+rota]);
  }

}
