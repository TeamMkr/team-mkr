import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'community-page',
	templateUrl: './community.component.html',
	styleUrls: ['./community.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
