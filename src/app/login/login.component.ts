import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
	selector: 'login-page',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	constructor(public af: AngularFire) {
	}
	login() {
		this.af.auth.login();
	}
	logout() {
		this.af.auth.logout();
	}
}
