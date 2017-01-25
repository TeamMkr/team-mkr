import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginFormService } from '../login-form/login-form.service';
import { AngularFire } from 'angularfire2';

@Component({
	selector: 'dashboard-page',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
	userEmail: string;
	constructor(
		public loginService: LoginFormService,
		public af: AngularFire
	) {}

	ngOnInit() {
		this.af.auth.subscribe(auth => {
			if (auth) {
				this.loginService.setUser(auth.github)
				this.userEmail = auth.github.email;
			} else {
				console.log('no auth');
			}
		})
	}


}
