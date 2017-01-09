import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { NgModule } from '@angular/core';
import { CommunityComponent } from './community.component';

const appRoutes: Routes = [
	{ path: 'community', component: CommunityComponent }
];
@NgModule({
	declarations: [
		CommunityComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
		AngularFireModule.initializeApp(firebaseConfig)
	],
	providers: [],
	bootstrap: [CommunityComponent]
})

export class CommunityModule { }
