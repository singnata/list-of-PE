import template from './entrepreneur-details.component.html'

export class EntrepreneurDetailsController {
  constructor($routeParams, entrepreneursDataService) {
    'ngInject';
    this.entrepreneursDataService = entrepreneursDataService;
    this.id = $routeParams.id;
  }
  $onInit() {
    this.loadEntrepreneurDetails();
  }  
  loadEntrepreneurDetails() {
    this.entrepreneursDataService.loadEntrepreneurDetails(this.id)
    .then((response) => {
    	this.entrepreneur = response.entrepreneur
    });
  } 
};

export const entrepreneurDetailsComponent = {
  template,
  bindings: {},
  controller: EntrepreneurDetailsController
}