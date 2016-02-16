describe('e2e testing for calendar app', function() {

  var weekOne = element.all(by.repeater('day in weekOne'));
  var weekTwo = element.all(by.repeater('day in weekTwo'));
  var weekThree = element.all(by.repeater('day in weekThree'));
  var weekFour = element.all(by.repeater('day in weekFour'));
  var weekFive = element.all(by.repeater('day in weekFive'));

  beforeEach(function() {
    browser.get('http://localhost:8080/app');
  });

  it('should display the month the user selects', function() {
      element(by.cssContainingText('option', 'March')).click();

      expect(weekOne.first().getText()).toContain('28');
      expect(weekFive.last().getText()).toContain('2');

      expect(weekOne.count()).toEqual(7);
      expect(weekTwo.count()).toEqual(7);
      expect(weekThree.count()).toEqual(7);
      expect(weekFour.count()).toEqual(7);
      expect(weekFive.count()).toEqual(7);
  });

  it('should display the year the user selects', function() {
      element(by.cssContainingText('option', '2018')).click();

      expect(weekOne.first().getText()).toContain('28');
      expect(weekFive.last().getText()).toContain('3');

      expect(weekOne.count()).toEqual(7);
      expect(weekTwo.count()).toEqual(7);
      expect(weekThree.count()).toEqual(7);
      expect(weekFour.count()).toEqual(7);
      expect(weekFive.count()).toEqual(7);
  });
});