import angular from 'angular';
/*import ngRoute from 'angular-route';*/
import {entrepreneursListComponent} from './js/components/list/entrepreneurs-list.component';
import {entrepreneurDetailsComponent} from './js/components/details/entrepreneur-details.component';
import {EntrepreneursDataService} from './js/services/entrepreneurs-data-service';
import './css/main.css'

angular.module('myApp', [])
	.component('entrepreneursList', entrepreneursListComponent)
	.component('entrepreneurDetails', entrepreneurDetailsComponent)
	.service('entrepreneursDataService', EntrepreneursDataService)
