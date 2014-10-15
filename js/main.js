require([

    'vendor/jquery',
    'vendor/underscore',
    'vendor/backbone',
    'views/RomanPulvermullerView'

], function($, _, Backbone, RomanPulvermullerView) {

  var romanPulvermullerView = new RomanPulvermullerView();
  romanPulvermullerView.render();
});