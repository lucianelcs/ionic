import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoInfoPage } from './aluno-info';

@NgModule({
  declarations: [
    AlunoInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoInfoPage),
  ],
})
export class AlunoInfoPageModule {}
