import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module'; 
import { RouterModule, Routes } from '@angular/router'; 
import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';

import { PessoaModule } from './pessoa/pessoa.module'; 
import { PessoaPesquisaComponent } from './pessoa/pessoa-pesquisa/pessoa-pesquisa.component'; 
import { PessoaService } from './pessoa/pessoa.service';
import { ErrorHandlerService } from './core/error-handler.service';

const routes: Routes = [ 
  {path: 'pessoa', component: PessoaPesquisaComponent} 
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ConfirmDialogModule,
    CoreModule,
    ToastModule,
    HttpClientModule,
    PessoaModule
  ],
  providers: [PessoaService,
    ConfirmationService,
    MessageService,
    ErrorHandlerService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
