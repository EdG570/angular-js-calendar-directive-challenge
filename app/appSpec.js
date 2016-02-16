describe("showCalendar directive", function() {
  
  var $scope,
      template,
      controller,
      elm;



  beforeEach(module('calendarDemoApp'));
  beforeEach(module('calendar.html'));

  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    var element = angular.element("<show-calendar></show-calendar>");
    template = $compile(element)($scope);
    $scope.$digest();
    elm = template[0]; //grab raw html
  }));


  it('Should build an array of years ranging from 20 years in the past and future from the current year', inject(function() {
      var elem = elm.querySelector('#calendar');
      expect(elem).not.toBe(null);
  }));
});