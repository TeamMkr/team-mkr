/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestRouterOutletComponent } from '../testing/test-router-outlet.component';
@Component({
	selector: 'tm-header',
	template: '<div></div>'
})
export class TestHeaderComponent {
}

describe('AppComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				TestHeaderComponent,
				TestRouterOutletComponent
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

	it('should render the router-outlet', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('router-outlet')).toBeTruthy();
	}));

});
