import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { CommunityComponent } from './community/community.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'community', component: CommunityComponent }
];

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
		HeaderComponent,
		ProfileComponent,
		CommunityComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
    RouterModule.forRoot(appRoutes),
		AngularFireModule.initializeApp(firebaseConfig)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
