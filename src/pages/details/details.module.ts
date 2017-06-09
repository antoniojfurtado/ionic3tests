import { NgModule } from '@angular/core';
import { DetailsPage } from './details';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [DetailsPage],
    imports: [IonicPageModule.forChild(DetailsPage)],
    entryComponents: [DetailsPage]
})
export class DetailsPageModule { }