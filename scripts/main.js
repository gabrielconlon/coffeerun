(function(window) {
  'use strict';
  //#include equivalents
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;

  var myTruck = new Truck('HAL', new DataStore());

  //'exports' myTruck to the window namespace so it can interact with in Console
  window.myTruck = myTruck;
})(window);
