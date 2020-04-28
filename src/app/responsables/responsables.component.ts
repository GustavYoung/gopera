import { Component, OnInit } from '@angular/core';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';



@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

  selectedResponsable: Responsable;
  responsables: Responsable[];

  constructor(private responsableService: ResponsableService) { }

  ngOnInit() {
    this.getResponsables();
  }

  delete(responsable: Responsable): void {
    this.responsables = this.responsables.filter(h => h !== responsable);
    this.responsableService.deleteResponsable(responsable).subscribe();
  }

  getResponsables(): void {
    this.responsableService.getResponsables()
        .subscribe(responsables => this.responsables = responsables);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.responsableService.addResponsable({ name } as Responsable)
      .subscribe(responsable => {
        this.responsables.push(responsable);
      });
  }
}
