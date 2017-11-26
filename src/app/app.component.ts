import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
title = 'Hello Valeron';

loadedFeature = "recipe";

ngOnInit() {
	firebase.initializeApp({
		apiKey: "AIzaSyD93lJUgoHpIbzp-vGACnFwHSL4v_ABO7A",
    authDomain: "valeron-bdc66.firebaseapp.com"
	});
}

  onNavigate(feature: string) {
  	this.loadedFeature = feature;
  }
}
