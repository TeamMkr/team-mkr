import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';

@NgModule({
	declarations: [
		ProfileComponent
	],
	exports: [
		ProfileComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: []
})
export class ProfileModule { }
