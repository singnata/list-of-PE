export /* @ngInject */ function formatRegistrationDirective() {
  return {
    require: 'ngModel',
    link: function(scope, elem, attr, ngModel) {
      const addSpaces = function(value) {
        const parsedValue = value.toString()
          .replace(/^(.{1})(.{3})(.{3})(.{4})(.{6})$/, '$1 $2 $3 $4 $5');
        return parsedValue;
        console.log(parsedValue)
      }
      const parseViewValue = function(value) {
        const viewValue = addSpaces(value);
        ngModel.$viewValue = viewValue;
        ngModel.$render();
        return addSpaces(viewValue);
      }
      ngModel.$parsers.push(parseViewValue);
    }
  }
}