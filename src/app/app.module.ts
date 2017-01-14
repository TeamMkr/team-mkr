import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { CommunityModule } from './community/community.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

let firebaseConfig = {
	apiKey: 'AIzaSyBNTppNoKWC1K2xGzEgp5pcmFNCGvBcl3c',
	authDomain: 'team-mkr-a5cd6.firebaseapp.com',
	databaseURL: 'https://team-mkr-a5cd6.firebaseio.com',
	storageBucket: 'team-mkr-a5cd6.appspot.com',
	messagingSenderId: '694572425110'
};

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ProfileModule,
		DashboardModule,
		ProfileModule,
		CommunityModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(firebaseConfig)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
