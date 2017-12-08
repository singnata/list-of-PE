import template from './entrepreneur-edit.component.html'

export class EntrepreneurEditDetailsController {
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

export const entrepreneurEditDetailsComponent = {
  template,
  bindings: {},
  controller: EntrepreneurEditDetailsController
}