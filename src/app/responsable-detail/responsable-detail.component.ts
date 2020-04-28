import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';

@Component({
  selector: 'app-responsable-detail',
  templateUrl: './responsable-detail.component.html',
  styleUrls: ['./responsable-detail.component.css']
})
export class ResponsableDetailComponent implements OnInit {

  @Input() responsable: Responsable;

  constructor(
    private route: ActivatedRoute,
    private responsableService: ResponsableService,
    private location: Location
  ) { }

  ngOnInit(): void{
    this.getResponsable();
  }
  getResponsable(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.responsableService.getResponsable(id)
      .subscribe(responsable => this.responsable = responsable);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.responsableService.updateResponsable(this.responsable)
      .subscribe(() => this.goBack());
  }

}