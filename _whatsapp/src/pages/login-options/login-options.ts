import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPhoneNumberPage } from '../login-phone-number/login-phone-number';
import { ResetPhoneNumberPage } from '../reset-phone-number/reset-phone-number';

/**
 * Generated class for the LoginOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-options',
  templateUrl: 'login-options.html',
})
export class LoginOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginOptionsPage');
  }

  openLoginOptions() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Já tem cadastro?',
      buttons: [
        {
          text: 'Sim, logar',
          handler: () => {
            this.navCtrl.push(LoginPhoneNumberPage);
          }
        },
        {
          text: 'Sim, trocar número',
          handler: () => {
            this.navCtrl.push(ResetPhoneNumberPage);
          }
        },
        {
          text: 'Não, criar conta',
          handler: () => {
            this.navCtrl.push(LoginPhoneNumberPage);
          }
        },
        {text: 'Cancelar', role: 'cancel'}
      ]
    });
    actionSheet.present();
  }

}
