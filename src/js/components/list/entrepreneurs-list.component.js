export class EntrepreneursListController {
  constructor(entrepreneursDataService) {
    'ngInject';
    this.entrepreneursDataService = entrepreneursDataService;
    this.loadEntrepreneursList();
  }
  loadEntrepreneursList() {
    this.entrepreneursDataService.loadEntrepreneursList()
    .then((response) => {
      this.entrepreneurItems = response.entrepreneurItems
    })
  }
  setId(id) {
    this.entrepreneursDataService.setId(id);
  }  
};

export const entrepreneursListComponent = {
  template: `
    <h1>Private Entrepreneurs</h1>
    <div class="list">
      <div class="item" ng-repeat="item in $ctrl.entrepreneurItems"> 
      {{item.last_name}} {{item.first_name}} 
      <button class="button__details" item="item" ng-click="$ctrl.setId(item.id)"><a href="#!/details">more details</a></button>         
      </div>
    </div>
  `,
  bindings: {},
  controller: EntrepreneursListController
}