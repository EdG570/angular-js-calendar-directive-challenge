var app = angular.module('calendarDemoApp', []);

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

          //Pushes all possible years the calendar will display to the years array
          for(i = $scope.year - 20; i < $scope.year + 20; i++) {
              $scope.years.push(i);
          } 
          
          $scope.buildCalendar = function() {

            //Updates $scope.date when a new month and/or year is selected
            $scope.date = new Date($scope.year, $scope.month, 1);

            //Gets calendar object data
            $scope.calendarData = CalendarRange.getMonthlyRange($scope.date);
            $scope.days = $scope.calendarData.days;
            
            //Builds each week for calendar
            $scope.weekOne = $scope.days.slice(0, 7);
            $scope.weekTwo = $scope.days.slice(7, 14);
            $scope.weekThree = $scope.days.slice(14, 21);
            $scope.weekFour = $scope.days.slice(21, 28);
            $scope.weekFive = $scope.days.slice(28, 35);
            
          };

          $scope.buildCalendar();
          
        }
      };
  });

  

