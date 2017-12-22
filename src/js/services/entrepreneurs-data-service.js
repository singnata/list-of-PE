export class EntrepreneursDataService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.url = '/api/entrepreneurs/';
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
  saveEntrepreneurChanges(entrepreneur, id) {
    return this.$http.put((this.url + id), entrepreneur);
  }
  saveNewEntrepreneur(entrepreneur) {
    return this.$http.post((this.url), entrepreneur);
  }
  deleteEntrepreneur(id) {
    return this.$http.delete(this.url + id);
  }

};