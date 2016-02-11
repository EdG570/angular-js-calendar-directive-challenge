var app = angular.module('calendarDemoApp', []);

  // app.factory('getCurrentMonthAndYear', function() {
  //       return {
  //         date: function() { new Date(); },
  //         month: function() { date.getMonth(); },
  //         year: function() { date.getFullYear(); }
  //       };
  // });
  
  app.directive('giveMonthsYears', function() {
      return {
        restrict: 'EA',
        templateUrl: 'monthsyears.html',
        scope: true,
        controller: function($scope, $element, $attrs) {
            

            $scope.getDate = function() {
              return new Date($scope.year, $scope.month, 1);
            };

        }
      };
  });


  app.directive('showCalendar', function() {
      return {
        restrict: 'EA',
        templateUrl: 'calendar.html',
        scope: true,
        controller: function($scope, $element, $attrs) {
          $scope.months = [{ name: 'January', id: 0 },{ name: 'february', id: 1 }, { name: 'March', id: 2 },{ name: 'April', id: 3 }, { name: 'May', id: 4 }, { name: 'June', id: 5 }, { name: 'July', id: 6 }, {name: 'August', id: 7 }, { name: 'September', id: 8 }, { name: 'October', id: 9 }, { name: 'November', id: 10 }, { name: 'December', id: 11}];
          $scope.date = new Date();
          $scope.month = $scope.date.getMonth();
          $scope.year = $scope.date.getFullYear();
          $scope.years = [];

          for(i = $scope.year - 20; i < $scope.year + 20; i++) {
              $scope.years.push(i);

          } 
          
          $scope.buildCalendar = function() {
             console.log($scope.year + ' ' + $scope.month);

            $scope.date = new Date($scope.year, $scope.month, 1);

            //Get current month data
            $scope.calendarData = CalendarRange.getMonthlyRange($scope.date);
            $scope.days = $scope.calendarData.days;
            console.log($scope.date);

            //Separates month data object into weeks and stores the values in arrays for each week
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
          };

          $scope.buildCalendar();

          function buildWeeks(days, week, start, limit) {
        
            for(var i = start; i < limit; i++) {
                week.push(days[i]); 
            }
             return week;
          }
        }
      };
  });

  

