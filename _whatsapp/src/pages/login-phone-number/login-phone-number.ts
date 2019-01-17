import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import * as firebase from 'firebase';
//import * as firebaseui from 'firebaseui';
//import firebaseConfig from '../../app/firebase-config';

//import scriptjs from 'scriptjs';

import { FirebaseAuthProvider } from '../../providers/auth/firebase-auth';

import { AuthProvider } from '../../providers/auth/auth';

import { MainPage } from '../main/main';

//declare const firebaseui;
//(<any>window).firebase = firebase;

/**
 * Generated class for the LoginPhoneNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-phone-number',
  templateUrl: 'login-phone-number.html',
})
export class LoginPhoneNumberPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private firebaseAuth: FirebaseAuthProvider,
              private authService: AuthProvider) {
  //  console.log('ionViewDidLoad LoginPhoneNumberPage');
  }

  ionViewDidLoad() {

    //console.log('ionViewDidLoad');

    const unsubscribed = this.firebaseAuth.firebase.auth().onAuthStateChanged((user) => {
      //console.log('onAuthStateChanged');
      if(user) {

        this.authService
            .login()
            .subscribe((token) => {
              this.redirectToMainPage();
            //  console.log('redirectToMainPage');
            }, (responseError) => {
              this.redirectToCustomerCreatePage();
              console.log('redirectToCustomerCreatePage');
            });
            unsubscribed();
      }

    });

    this.firebaseAuth.makePhoneNumberForm('#firebase-ui');

  //  this.authService.login().subscribe((token) => console.log(token));
  //  this.firebaseAuth.getUser().then((user) => {
  //    console.log(user);
  //  });

    //console.log('ionViewDidLoad LoginPhoneNumberPage');
    /*
    scriptjs('https://www.gstatic.com/firebasejs/ui/3.1.1/firebase-ui-auth__pt.js', () => {
      firebase.initializeApp(firebaseConfig);
      const uiConfig = {
        signInOptions: [
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ]
      }
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebase-ui', uiConfig);
    });
    */
  }

  redirectToMainPage() {
    this.navCtrl.setRoot(MainPage);
  }

  redirectToCustomerCreatePage() {
   // this.navCtrl.setRoot(MainPage);
  }

}
