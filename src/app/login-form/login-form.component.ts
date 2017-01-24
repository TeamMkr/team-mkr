import { Component } from '@angular/core';
import { LoginFormService } from './login-form.service';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
	selector: 'tm-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	providers: [ LoginFormService ]
})
export class LoginFormComponent {

	constructor(
		private loginService: LoginFormService,
		public af: AngularFire,
		public router: Router
	) {
		af.auth.subscribe(auth => {
			if (auth) {
				loginService.setUser(auth);
			} else {
				console.log('no auth');
			}
		})
	}

	loginGithub(): void {
		this.af.auth.login()
			.catch(err => console.log('ERROR @ login-form component', err))
			.then(_ => this.router.navigateByUrl('/dashboard'));
	}

	logout(): void {
		this.loginService.logout();
	}

}
