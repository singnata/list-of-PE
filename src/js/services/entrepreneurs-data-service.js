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
  loadEntrepreneurDetails(id) {
    return this.$http.get(this.url + id).then(function(response) {
      return {
        entrepreneur: response.data
      };
    })
  }
};