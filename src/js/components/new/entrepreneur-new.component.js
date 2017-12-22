import template from './entrepreneur-new.component.html'

export class EntrepreneurNewController {
  constructor($routeParams, $timeout, $location, entrepreneursDataService) {
    'ngInject';
    this.entrepreneursDataService = entrepreneursDataService;
    this.id = $routeParams.id;
    this.$timeout = $timeout;
    this.$location = $location;
    this.isShowMessage = false;
    this.successMessage = 'changes have saved';
    this.disabledInput = false;
  }
  saveNewEntrepreneur(entrepreneur) {
    this.entrepreneursDataService.saveNewEntrepreneur(entrepreneur)
      .then(() => {
      	this.isShowMessage = true;
        this.$timeout(() => {
          this.isShowMessage = false; 
          this.$location.path('/');
        }, 2500);  
    	});
  }
};

export const entrepreneurNewComponent = {
  template,
  bindings: {},
  controller: EntrepreneurNewController
}