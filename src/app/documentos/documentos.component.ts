import { Component, OnInit } from '@angular/core';
import { Operativo } from '../operativo';
import { SvcoperativoService } from '../svcoperativo.service';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  selectedOperativo: Operativo;
  operativos: Operativo[];

  constructor(private svcoperativoService: SvcoperativoService) { }

  ngOnInit() {
    this.getOperativos();
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    //const pdfUrl = './assets/sample.pdf'; esto comentado es para hacerlo dinamico
    //const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  openDoc(pdfUrl: string ) {
    window.open(pdfUrl, '_blank', '', true);
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
