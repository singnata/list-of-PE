import template from './entrepreneurs-list.component.html'

export class EntrepreneursListController {
  constructor(entrepreneursDataService) {
    'ngInject';
    this.entrepreneursDataService = entrepreneursDataService;  
  }
  $onInit() {
    this.loadEntrepreneursList();
  }
  loadEntrepreneursList() {
    this.entrepreneursDataService.loadEntrepreneursList()
    .then((response) => {
      this.entrepreneurItems = response.entrepreneurItems
    })
  }
};

export const entrepreneursListComponent = {
  template,
  bindings: {},
  controller: EntrepreneursListController
}