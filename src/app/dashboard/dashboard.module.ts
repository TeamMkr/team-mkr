import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	declarations: [
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
	bootstrap: [DashboardComponent]
})

export class DashboardModule { }
