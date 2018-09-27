import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';




import { DadosPage } from '../dados/dados';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('usuario') username;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public http: Http) {

  }
  authenticatorUser() {
    let toast = this.toastCtrl.create({ duration: 30000, position: 'bottom' });
    var headers = new Headers();
    let options = new RequestOptions({ headers: headers });

    let body = {
      "username": this.username.value,
      "password": this.password.value
    }

    this.http.post('http://localhost:8080/authentication', body, options)
      .subscribe(data => {
        console.log(data['_body']);
        this.navCtrl.push(DadosPage);
        toast.setMessage('Logado com sucesso!');
      }, error => {
        //console.log(error);
        if (body.username == '') {
          toast.setMessage("Nome é obrigatório!");
          toast.present();
        }
          if (body.password == '') {
            toast.setMessage("Senha é obrigatório!");
            toast.present();
          }else{
            toast.setMessage("Usuário ou senha inválidos!");
            toast.present();
          }
        
      });



    //Md5.hashStr(password);
    //if(this.email.value == "luciane" && this.password.value == '123456'){
    // this.navCtrl.push(DadosPage);
    //  toast.setMessage('Logado com sucesso!');
    // toast.present();
    // }else{
    //  toast.setMessage('Usuário ou senha não encontrado!');
    //   toast.present();
    // }
  }

}
