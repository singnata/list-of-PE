import angular from 'angular';
import ngRoute from 'angular-route';
import {entrepreneursListComponent} from './js/components/list/entrepreneurs-list.component';
import {entrepreneurDetailsComponent} from './js/components/details/entrepreneur-details.component';
import {entrepreneurEditComponent} from './js/components/edit/entrepreneur-edit.component';
import {entrepreneurFormComponent} from './js/components/form/entrepreneur-form.component';
import {entrepreneurNewComponent} from './js/components/new/entrepreneur-new.component';
import {EntrepreneursDataService} from './js/services/entrepreneurs-data-service';
import {formatDateDirective} from './js/directives/format-date-directive';
import {formatRegistrationDirective} from './js/directives/format-registration-directive';
import './css/main.css'

angular.module('myApp', [ngRoute])
	.component('entrepreneursList', entrepreneursListComponent)
	.component('entrepreneurDetails', entrepreneurDetailsComponent)
	.component('entrepreneurEdit', entrepreneurEditComponent)
	.component('entrepreneurForm', entrepreneurFormComponent)
	.component('entrepreneurNew', entrepreneurNewComponent)
	.directive('formatDate', formatDateDirective)
	.directive('formatRegistration', formatRegistrationDirective)
	.service('entrepreneursDataService', EntrepreneursDataService)
	.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			template: '<entrepreneurs-list></entrepreneurs-list>'
		})
		.when('/:id/details', {
			template: '<entrepreneur-details></entrepreneur-details>'
		})
		.when('/:id/edit', {
			template: '<entrepreneur-edit></entrepreneur-edit>'
		})
		.when('/new', {
			template: '<entrepreneur-new></entrepreneur-new>'
		})
		.otherwise({
			redirectTo: '/'
		})
	})


		
