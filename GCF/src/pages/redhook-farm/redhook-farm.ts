import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RedhookFarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redhook-farm',
  templateUrl: 'redhook-farm.html',
})
export class RedhookFarmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedhookFarmPage');
  }

  items = [
    'Red-Hook Farms'
  ]

  itemSelected(item: string) {
    console.log("Selected item", item);
  }


}
