import { PacienteModule } from './paciente/paciente.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './template/template.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//componentes
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClientesModule } from './clientes/clientes.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';


//services
import { ClientesService } from './services/clientes.service';
import { ModalUtilService } from './services/modal-util.service';
import { AuthService } from './services/auth.service';
import { FornecedorService } from './services/fornecedor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule,IConfig } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    ],
  imports: [
    NgxMaskModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    PacienteModule,
    FornecedorModule,
    SharedModule,
    ModalModule.forRoot(),
    NgbModule,
  ],
  providers: [
    ClientesService,
    FornecedorService,
    ModalUtilService,
    AuthService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
