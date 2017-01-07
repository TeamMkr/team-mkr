import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
		ProfileComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
    RouterModule.forRoot(appRoutes),
		AngularFireModule.initializeApp(firebaseConfig)
	],
	providers: [],
	bootstrap: [ProfileComponent]
})
export class ProfileModule { }
