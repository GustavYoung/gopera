import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Operativo } from '../operativo';
import { SvcoperativoService } from '../svcoperativo.service';

@Component({
  selector: 'app-operativo-detail',
  templateUrl: './operativo-detail.component.html',
  styleUrls: ['./operativo-detail.component.css']
})
export class OperativoDetailComponent implements OnInit {

  public show:boolean = false;
  public buttonEdit:any = 'Show';

  @Input() operativo: Operativo;

  constructor(
    private route: ActivatedRoute,
    private svcoperativoService: SvcoperativoService,
    private location: Location
  ) { }

  ngOnInit(): void{
    this.getOperativo();
  }
  getOperativo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.svcoperativoService.getOperativo(id)
      .subscribe(operativo => this.operativo = operativo);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.svcoperativoService.updateOperativo(this.operativo)
      .subscribe(() => this.goBack());
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonEdit = "Hide";
    else
      this.buttonEdit = "Show";
  }

}
