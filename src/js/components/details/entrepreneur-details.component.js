import template from './entrepreneur-details.component.html'

export class EntrepreneurDetailsController {
  constructor($routeParams, entrepreneursDataService) {
    'ngInject';
    this.entrepreneursDataService = entrepreneursDataService;
    this.id = $routeParams.id;
  }
  $onInit() {
    this.loadEntrepreneurDetails();
    this.scrollToTheTopOfThePage();
  } 
  loadEntrepreneurDetails() {
    this.entrepreneursDataService.loadEntrepreneurDetails(this.id)
    .then((response) => {
    	this.entrepreneur = response.entrepreneur
    });
  } 
  scrollToTheTopOfThePage() {
    window.scrollTo(0, 0);
  }
};

export const entrepreneurDetailsComponent = {
  template,
  bindings: {},
  controller: EntrepreneurDetailsController
}