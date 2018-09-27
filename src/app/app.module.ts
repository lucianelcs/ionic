import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DadosPage } from '../pages/dados/dados';
import { AlunoInfoPage } from '../pages/aluno-info/aluno-info';
import { CursosPage } from '../pages/cursos/cursos';
import {AvaliacoesPage} from '../pages/avaliacoes/avaliacoes';
import {NotasPage} from '../pages/notas/notas'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DadosPage,
    AlunoInfoPage,
    CursosPage,
    AvaliacoesPage,
    NotasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DadosPage,
    AlunoInfoPage,
    CursosPage,
    AvaliacoesPage,
    NotasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
