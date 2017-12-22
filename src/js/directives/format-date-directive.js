export /* @ngInject */ function formatDateDirective() {
  return {
    require: 'ngModel',
    link: function(scope, elem, attr, ngModel) {
      ngModel.$formatters.push(function(modelValue) {
        if (modelValue){
          return new Date(modelValue);
        } else {
          return null;
        }
      });
    }
  }
}