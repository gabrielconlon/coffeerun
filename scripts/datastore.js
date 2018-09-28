/*
IIFE = immediately invoked function expression
a function which organizes code, called a 'module',
and when called runs all the code inside itself immediately
similair to a #include
*/

(function(window) {
  'use strict';
  //create App and if another App property exists, assign App
  //else, set as an empty object
  var App = window.App || {};
  var data = {};

  // constructor, starting with a capital letter helps organize this way
  function DataStore() {
    //console.log('running the DataStore function');
    //creates a new object 'data' with an empty reference
    //this.data = {};
  }

  //gave the DataStore prototype an add function/property
  //setters
  DataStore.prototype.add = function(key, val) {
    data[key] = val;
  };

  //getters
  DataStore.prototype.get = function (key) {
    return data[key];
  };

  DataStore.prototype.getAll = function (){
    return data;
  };

  //removers
  DataStore.prototype.remove = function (key) {
    delete data[key];
  }

  App.DataStore = DataStore;
  window.App = App;
})(window); //IIFE is invoked by the creation of window
