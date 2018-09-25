import { Component , ViewChild} from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
//import {Md5} from 'ts-md5/dist/md5';

import { DadosPage } from '../dados/dados';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
  entrar(){
    let toast =this.toastCtrl.create({duration:3000, position: 'bottom'});

   // Md5.hashStr(password);
    if(this.email.value == "luciane" && this.password.value == '123456'){
      this.navCtrl.push(DadosPage);
      toast.setMessage('Logado com sucesso!');
      toast.present();
      }else{
        toast.setMessage('Usuário ou senha não encontrado!');
        toast.present();
      }
  }

}
