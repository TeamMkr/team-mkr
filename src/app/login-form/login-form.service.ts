import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginFormService {
	private userInfo: FirebaseAuthState;
	constructor(public af: AngularFire) {
		this.userInfo = null;
	}

	getUser() {
		return this.userInfo;
	}

	setUser(userInfo): void {
		this.userInfo = userInfo;
	}

	loginGithub(): Observable<FirebaseAuthState> {
		return this.af.auth
			.filter(auth => !!auth.github.uid);
	}

	logout() {
		this.af.auth.logout();
	}
}