import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperativosComponent } from './operativos/operativos.component';
import { OperativoDetailComponent } from './operativo-detail/operativo-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OperativoSearchComponent } from './operativo-search/operativo-search.component';

@NgModule({
  
  declarations: [
    AppComponent,
    OperativosComponent,
    OperativoDetailComponent,
    MessagesComponent,
    DashboardComponent,
    OperativoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
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
