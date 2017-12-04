export class EntrepreneurDetailsController {
  constructor(entrepreneursDataService) {
    'ngInject';
    this.entrepreneursDataService = entrepreneursDataService;
    this.loadEntrepreneurDetails();
    this.isDisabled = true;
  }
  loadEntrepreneurDetails() {
    this.entrepreneursDataService.loadEntrepreneurDetails()
    .then((response) => {
    	this.code = response.code,
      this.id = response.id,
      this.firstName = response.firstName,
      this.lastName = response.lastName,
      this.zipCode = response.zipCode,
      this.region = response.region,
      this.city = response.city,
      this.street = response.street,
      this.strNumber = response.strNumber,
      this.aptNumber = response.aptNumber,
      this.registrationNumber = response.registrationNumber,
      this.registrationDay = response.registrationDay,
      this.registrationMonth = response.registrationMonth,
      this.registrationYear = response.registrationYear,
      this.account = response.account,
      this.bank = response.bank,
      this.MFO = response.MFO
    });
  } 
  allowEditing() {
    this.isDisabled = !this.isDisabled;
  }
};

export const entrepreneurDetailsComponent = {
  template: ``,
  bindings: {},
  controller: EntrepreneurDetailsController
}