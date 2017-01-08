import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	declarations: [
		DashboardComponent
	],
	exports: [
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: []
})

export class DashboardModule { }
