import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
	selector: 'login-page',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	constructor(public af: AngularFire, public router: Router) {
	}
	login() {
		this.af.auth.subscribe(auth => {
			console.log(auth);
			if (auth.github.uid) {
				this.router.navigateByUrl('/dashboard');
			}
		});
	}
	logout() {
		this.af.auth.logout();
	}
}
