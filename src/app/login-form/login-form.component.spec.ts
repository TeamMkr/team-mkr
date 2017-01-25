/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AngularFire, FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { LoginFormComponent } from './login-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestDummyComponent } from '../../testing/test-dummy.component';

describe('LoginFormComponent', () => {
	let component: LoginFormComponent;
	let fixture: ComponentFixture<LoginFormComponent>;

	beforeEach(async(() => {
		let firebaseConfig = {
			apiKey: 'AIzaSyBNTppNoKWC1K2xGzEgp5pcmFNCGvBcl3c',
			authDomain: 'team-mkr-a5cd6.firebaseapp.com',
			databaseURL: 'https://team-mkr-a5cd6.firebaseio.com',
			storageBucket: 'team-mkr-a5cd6.appspot.com',
			messagingSenderId: '694572425110'
		};
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([
					{ path: 'dashboard', component: TestDummyComponent }
				])
			],
			declarations: [
				LoginFormComponent,
				TestDummyComponent
			],
			providers: [
				FIREBASE_PROVIDERS,
				defaultFirebase(firebaseConfig),
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it ('should connect to Firebase', inject([AngularFire], (af: AngularFire) => {
		expect(af.database).not.toBe(null);
	}));

});
