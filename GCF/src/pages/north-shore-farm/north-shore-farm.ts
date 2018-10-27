import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NorthShoreFarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-north-shore-farm',
  templateUrl: 'north-shore-farm.html',
})
export class NorthShoreFarmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NorthShoreFarmPage');
  }

  items = [
    'North-Shore Farms'
  ]

  itemSelected(item: string) {
    console.log("Selected item", item);
  }

}
