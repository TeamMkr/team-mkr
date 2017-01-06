import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

let firebaseConfig = {
	apiKey: 'AIzaSyBNTppNoKWC1K2xGzEgp5pcmFNCGvBcl3c',
	authDomain: 'team-mkr-a5cd6.firebaseapp.com',
	databaseURL: 'https://team-mkr-a5cd6.firebaseio.com',
	storageBucket: 'team-mkr-a5cd6.appspot.com',
	messagingSenderId: '694572425110'
};

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AngularFireModule.initializeApp(firebaseConfig)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
