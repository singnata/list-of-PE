import template from './entrepreneurs-list.component.html'

export class EntrepreneursListController {
  constructor(entrepreneursDataService) {
    'ngInject';
    this.entrepreneursDataService = entrepreneursDataService;  
    this.confirmMessage = 'Are You Sure You Want to Delete PE ';
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
  deleteEntrepreneur(id, name) {    
    if(confirm(this.confirmMessage + name)) {
      this.entrepreneursDataService.deleteEntrepreneur(id)
      .then(this.loadEntrepreneursList());
    }   
  }
};

export const entrepreneursListComponent = {
  template,
  bindings: {},
  controller: EntrepreneursListController
}