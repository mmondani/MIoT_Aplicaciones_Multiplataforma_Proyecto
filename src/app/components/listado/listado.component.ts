import { Component, OnInit } from '@angular/core';
import { Dispositivo } from 'src/app/dispositivo';
import { DispositivoService } from '../../services/dispositivo.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoDispositivos: Array<Dispositivo>;

  constructor(private dispositivoService: DispositivoService) {
    this.listadoDispositivos = dispositivoService.getDispositivos();
  }

  ngOnInit(): void {
  }

}
