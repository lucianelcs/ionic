import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoInfoPage } from '../aluno-info/aluno-info';
import { CursosPage } from '../cursos/cursos';
import { AvaliacoesPage } from '../avaliacoes/avaliacoes';
import { NotasPage } from '../notas/notas';

@IonicPage()
@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html',
})
export class DadosPage {
  public opcoes=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  opcoesPage() {
    this.opcoes= [
      { nome: 'Informações' },
      { nome: 'Cursos' },
      { nome: 'Avaliações' },
      { nome: 'Notas' },
    ];
  };
  openAlunosInfoPage() {
    this.navCtrl.push(AlunoInfoPage);    
  };
  openCursosPage(){
    this.navCtrl.push(CursosPage);    
  };
  openAvaliacoesPage(){
    this.navCtrl.push(AvaliacoesPage);    
  };
  openNotasPage(){
    this.navCtrl.push(NotasPage);
  };
}
