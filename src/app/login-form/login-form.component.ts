import { Component } from '@angular/core';
import { LoginFormService } from './login-form.service';

@Component({
	selector: 'tm-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	providers: [ LoginFormService ]
})
export class LoginFormComponent {
	constructor(private loginService: LoginFormService) {
	}
	loginGithub(): void {
		this.loginService.loginGithub();
	}

}
