import template from './entrepreneur-edit.component.html'

export class EntrepreneurEditController {
  constructor($routeParams, $timeout, $location, entrepreneursDataService) {
    'ngInject';
    this.entrepreneursDataService = entrepreneursDataService;
    this.id = $routeParams.id;
    this.$timeout = $timeout;
    this.$location = $location;
    this.successMessage = 'changes have saved';
    this.isShowMessage = false;
    this.disabledInput = true;
  }
  $onInit() {
    this.loadEntrepreneurDetails();
  }  
  loadEntrepreneurDetails() {
    this.entrepreneursDataService.loadEntrepreneurDetails(this.id)
      .then((response) => {
        this.entrepreneur = response.entrepreneur;
      });
  } 
  saveEntrepreneurChanges(entrepreneur) {
    this.entrepreneursDataService.saveEntrepreneurChanges(entrepreneur, this.id)
      .then(() => {
        this.isShowMessage = true;
        this.$timeout(() => {
          this.isShowMessage = false; 
          this.$location.path('/');
        }, 2500);    
      }) 
  }
};

export const entrepreneurEditComponent = {
  template,
  bindings: {},
  controller: EntrepreneurEditController
}