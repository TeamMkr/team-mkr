/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({
	selector: 'tm-header',
	template: '<div></div>'
})
export class TestHeaderComponent {
}
@Component({
	selector: 'community-page',
	template: '<div></div>'
})
export class TestCommunityComponent {
}
@Component({
	selector: 'profile-page',
	template: '<div></div>'
})
export class TestProfileComponent {
}
@Component({
	selector: 'dashboard-page',
	template: '<div></div>'
})
export class TestDashboardComponent {
}

describe('AppComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				TestHeaderComponent,
				TestProfileComponent,
				TestCommunityComponent,
				TestDashboardComponent
			],
		});
	TestBed.compileComponents();
	});

	it('should create the app', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it('should render the header', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('tm-header')).toBeTruthy();
	}));

});
