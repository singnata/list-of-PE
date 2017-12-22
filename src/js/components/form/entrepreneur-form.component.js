import template from './entrepreneur-form.component.html'

export class EntrepreneurFormController {
  saveEntrepreneur() {
    this.onChange({entrepreneur : this.entrepreneur})     
  }
};

export const entrepreneurFormComponent = {
  template,
  bindings: {
    entrepreneur: '<',
    disabledInput: '<',
    onChange: '&'
  },
  controller: EntrepreneurFormController
}