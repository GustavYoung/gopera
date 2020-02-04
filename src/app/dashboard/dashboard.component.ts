import { Component, OnInit } from '@angular/core';
import { Operativo } from '../operativo';
import { SvcoperativoService } from '../svcoperativo.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  operativos: Operativo[] = [];

  constructor(private svcoperativoService: SvcoperativoService) { }

  ngOnInit() {
    this.getOperativos();

  }

  getOperativos(): void {
    this.svcoperativoService.getOperativos()
        .subscribe(operativos => this.operativos = operativos.slice(0, 4));
  }

}
