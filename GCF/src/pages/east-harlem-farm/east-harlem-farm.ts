import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EastHarlemFarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-east-harlem-farm',
  templateUrl: 'east-harlem-farm.html',
})
export class EastHarlemFarmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EastHarlemFarmPage');
  }

  items = [
    'East-Harlem Farms'
  ]

  itemSelected(item: string) {
    console.log("Selected item", item);
  }


}
