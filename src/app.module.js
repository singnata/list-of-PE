import angular from 'angular';
import ngRoute from 'angular-route';
import {entrepreneursListComponent} from './js/components/list/entrepreneurs-list.component';
import {entrepreneurDetailsComponent} from './js/components/details/entrepreneur-details.component';
import {entrepreneurEditDetailsComponent} from './js/components/edit/entrepreneur-edit.component';
import {EntrepreneursDataService} from './js/services/entrepreneurs-data-service';
import './css/main.css'

angular.module('myApp', [ngRoute])
	.component('entrepreneursList', entrepreneursListComponent)
	.component('entrepreneurDetails', entrepreneurDetailsComponent)
	.component('entrepreneurEditDetails', entrepreneurEditDetailsComponent)
	.service('entrepreneursDataService', EntrepreneursDataService)
	.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			template: '<entrepreneurs-list></entrepreneurs-list>'
		})
		.when('/details/:id', {
			template: '<entrepreneur-details></entrepreneur-details>'
		})
		.when('/details/:id/edit', {
			template: '<entrepreneur-edit-details></entrepreneur-edit-details>'
		})
		.otherwise({
			redirectTo: '/'
		})
	})


		
