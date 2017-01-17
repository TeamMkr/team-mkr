import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'tm-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(public af: AngularFire, public router: Router) {
	}
	loginGithub() {
		this.af.auth.subscribe(auth => {
			if (auth.github.uid) {
				this.af.auth.login()
				.then(_ => {
					this.router.navigateByUrl('/dashboard');
				})
			}
		});
	}
	login() {
	}
	logout() {
		this.af.auth.logout();
	}

}
