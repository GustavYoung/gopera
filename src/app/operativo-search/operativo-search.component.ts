import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Operativo } from '../operativo';
import { SvcoperativoService } from '../svcoperativo.service';

@Component({
  selector: 'app-operativo-search',
  templateUrl: './operativo-search.component.html',
  styleUrls: ['./operativo-search.component.css']
})
export class OperativoSearchComponent implements OnInit {
  operativos$: Observable<Operativo[]>;
  private searchTerms = new Subject<string>();

  constructor(private svcoperativoService: SvcoperativoService) { }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.operativos$ = this.searchTerms.pipe(
      //Wait 300ms after each Keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as the previuos term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.svcoperativoService.searchOperativos(term)),

    );

  }

}
