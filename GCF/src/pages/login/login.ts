import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username:string;
  lastname:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    let checking = ['rachelBrown@rachel.xyz', 'carlSagan@cosmos.bbb'];
    let password = ['password', 'rachelismybestfriend'];
    for(let pls of checking){
      if(pls == this.username){
        for(let pass of password){
          if(pass == this.lastname){
            console.log('pew');
          }
        }
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push('MainPage');
  }

}
