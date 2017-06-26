import { Meteor } from 'meteor/meteor';

Meteor.methods({
  method1: function (arg) {
    var result = arg + 5;
    return result;
  },
  method2: function (arg) {
    var result = arg + 10;
    return result;
  }
});