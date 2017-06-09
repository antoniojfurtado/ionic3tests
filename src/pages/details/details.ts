import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage({
      segment : 'details/:id'
    }
)
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      console.log(this.navParams.get('id'));
  }

}