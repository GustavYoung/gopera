import { Component, OnInit } from '@angular/core';
import { Operativo } from '../operativo';
import { SvcoperativoService } from '../svcoperativo.service'

@Component({
  selector: 'app-repdirarios',
  templateUrl: './repdirarios.component.html',
  styleUrls: ['./repdirarios.component.css']
})
export class RepdirariosComponent implements OnInit {

  selectedOperativo: Operativo;
  operativos: Operativo[];

  constructor(private svcoperativoService: SvcoperativoService) { }

  ngOnInit() {
    this.getOperativos();
  }

  delete(operativo: Operativo): void {
    this.operativos = this.operativos.filter(h => h !== operativo);
    this.svcoperativoService.deleteOperativo(operativo).subscribe();
  }

  getOperativos(): void {
    this.svcoperativoService.getOperativos()
        .subscribe(operativos => this.operativos = operativos);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.svcoperativoService.addOperativo({ name } as Operativo)
      .subscribe(operativo => {
        this.operativos.push(operativo);
      });
  }
}
