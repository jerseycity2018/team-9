import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BrownsvilleFarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brownsville-farm',
  templateUrl: 'brownsville-farm.html',
})
export class BrownsvilleFarmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrownsvilleFarmPage');
  }

  items = [
    'Brownsville Farms'
  ]

  itemSelected(item: string) {
    console.log("Selected item", item);
  }

}
