var app = angular.module('calendarDemoApp', []);
  
  app.directive('giveMonthsYears', function() {
      return {
        restrict: 'EA',
        templateUrl: 'monthsyears.html',
        scope: true,
        controller: function($scope, $element, $attrs) {
            $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            $scope.date = new Date();
            $scope.currentMonth = $scope.date.getMonth();
            $scope.month = $scope.currentMonth;

            $scope.year = $scope.date.getFullYear();

            $scope.$watch($attrs.ngModel, function() {
              console.log($scope.month);
            });
            
        }
      };
  });

  app.directive('showCalendar', function() {
      return {
        restrict: 'EA',
        templateUrl: 'calendar.html',
        scope: true,
        controller: function($scope, $element, $attrs) {
          $scope.calendarData = CalendarRange.getMonthlyRange(new Date());
          $scope.days = $scope.calendarData.days;

          $scope.date = new Date();
          $scope.currentMonth = $scope.date.getMonth();
          console.log($scope.days);

          $scope.weekOne = [];
          $scope.weekTwo = [];
          $scope.weekThree = [];
          $scope.weekFour = [];
          $scope.weekFive = [];

          buildWeeks($scope.days, $scope.weekOne, 0, 7);
          buildWeeks($scope.days, $scope.weekTwo, 7, 14);
          buildWeeks($scope.days, $scope.weekThree, 14, 21);
          buildWeeks($scope.days, $scope.weekFour, 21, 28);
          buildWeeks($scope.days, $scope.weekFive, 28, 35);

          function buildWeeks(days, week, start, limit) {
        
            for(var i = start; i < limit; i++) {
                week.push(days[i]); 
            }
             return week;
          }
        }
      };
  });

  

