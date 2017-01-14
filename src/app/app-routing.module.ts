import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CommunityComponent } from './community/community.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'community', component: CommunityComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }