import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from '../login-form/login-form.component';

@NgModule({
	declarations: [
		LoginComponent,
		LoginFormComponent
	],
	exports: [
		LoginComponent,
		LoginFormComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: []
})
export class LoginModule { }
