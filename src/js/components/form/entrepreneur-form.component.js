import template from './entrepreneur-form.component.html'

export class EntrepreneurFormController {
  saveEntrepreneur() {
    this.onChange({entrepreneur : this.entrepreneur})     
  }
  $onChanges(change) {
    if(change.originalEntrepreneur) {
      this.entrepreneur = angular.copy(this.originalEntrepreneur);
    }         
  }
};

export const entrepreneurFormComponent = {
  template,
  bindings: {
    originalEntrepreneur: '<entrepreneur',
    disabledInput: '<',
    onChange: '&'
  },
  controller: EntrepreneurFormController
}