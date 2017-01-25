import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { LoginFormService } from '../login-form/login-form.service';

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
	providers: [ LoginFormService ]
})

export class DashboardModule { }
