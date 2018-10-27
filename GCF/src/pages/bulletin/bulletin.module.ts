import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulletinPage } from './bulletin';

@NgModule({
  declarations: [
    BulletinPage,
  ],
  imports: [
    IonicPageModule.forChild(BulletinPage),
  ],
})
export class BulletinPageModule {}
