export class EntrepreneursDataService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.url = 'http://localhost:3000/entrepreneurs/';
  }
  loadEntrepreneursList() {
    return this.$http.get(this.url).then(function(response) {
      return {
        entrepreneurItems: response.data   
      };
    })
  }  
  loadEntrepreneurDetails() {
    return this.$http.get(this.url + this.id).then(function(response) {
      return {
        firstName: response.data.first_name,
        id: response.data.id,
        lastName: response.data.last_name,
        code: response.data.code,
        zipCode: response.data.address.zip_code,
        region: response.data.address.region,
        city: response.data.address.city,
        street: response.data.address.street,
        strNumber: response.data.address.street_number,
        aptNumber: response.data.address.apartment_number,
        registrationNumber: response.data.registration.registration_number,
        registrationDay: response.data.registration.date_of_registration.day,
        registrationMonth: response.data.registration.date_of_registration.month,
        registrationYear: response.data.registration.date_of_registration.year,
        account: response.data.bank_account.account,
        bank: response.data.bank_account.bank,
        MFO: response.data.bank_account.MFO
      };
    })
  }
  setId(id) {
    this.id = id;
  }
};