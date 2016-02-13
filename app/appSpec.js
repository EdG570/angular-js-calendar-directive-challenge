describe("showCalendar directive", function() {
  
  var $scope,
      element,
      template,
      controller;

  beforeEach(module('calendarDemoApp'));

  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    var element = angular.element("<show-calendar></show-calendar>");
    template = $compile(element)($scope);
    $scope.$digest();
    controller = element.controller;
  }));


  it('Should build an array of years ranging from 20 years in the past and future from the current year', inject(function() {
      $scope.year = 2016;
      expect($scope.years).toContain(1996);
  }));
});