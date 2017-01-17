import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class LoginFormService {
	constructor(public af: AngularFire, public router: Router) {
	}

	loginGithub(): void {
		this.af.auth.subscribe(auth => {
			if (auth.github.uid) {
				this.af.auth.login()
				.then(_ => {
					this.router.navigateByUrl('/dashboard');
				})
			}
		});
	}

	logout() {
		this.af.auth.logout();
	}
}