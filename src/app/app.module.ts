import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperativosComponent } from './operativos/operativos.component';
import { OperativoDetailComponent } from './operativo-detail/operativo-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OperativoSearchComponent } from './operativo-search/operativo-search.component';
import { ResponsablesComponent } from './responsables/responsables.component';
import { ResponsableDetailComponent } from './responsable-detail/responsable-detail.component';
import { ChartsComponent } from './charts/charts.component';
import { RepdirariosComponent } from './repdirarios/repdirarios.component';
import { RepsfinalesComponent } from './repsfinales/repsfinales.component';

@NgModule({
  
  declarations: [
    AppComponent,
    OperativosComponent,
    OperativoDetailComponent,
    MessagesComponent,
    DashboardComponent,
    OperativoSearchComponent,
    ResponsablesComponent,
    ResponsableDetailComponent,
    ChartsComponent,
    RepdirariosComponent,
    RepsfinalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
