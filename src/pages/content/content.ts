import { Component } from '@angular/core';
import { NavController, reorderArray  } from 'ionic-angular';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
items: any[];
    reorder = "false";
    
  constructor(public navCtrl: NavController) { 
 this.items = [{ value: 'assets/img/marty-avatar.png' }, { value: 'assets/img/ian-avatar.png' }, { value: 'assets/img/marty-avatar.png' }, { value: 'assets/img/marty-avatar.png' }, { value: 'assets/img/ian-avatar.png' }, { value: 'assets/img/ian-avatar.png' }];
      
}

 public reorderItems(indexes) {
this.items = reorderArray(this.items, indexes);
}

public activateReordering() {
var state = this.reorder;
if(state === "true"){
this.reorder = "false";
}
else{
this.reorder = "true";
}
}
}