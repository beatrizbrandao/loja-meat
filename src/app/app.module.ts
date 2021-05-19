import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MaquiagensComponent } from './maquiagens/maquiagens.component';
import { MaquiagemComponent } from './maquiagens/maquiagem/maquiagem.component';
import { MaquiagensService } from './maquiagens/maquiagens.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MaquiagemComponent,
    MaquiagensComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MaquiagensService],
  bootstrap: [AppComponent],
})
export class AppModule { }
