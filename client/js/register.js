import { Template } from 'meteor/templating';


Template.register.events({
 'submit form'(event) {
    event.preventDefault();

    var registerData = {
      email: event.target.registerEmail.value,
      password: event.target.registerPassword.value
    }

    Accounts.createUser(registerData, function(error){
      if (Meteor.user()) {
          console.log(Meteor.userId());
      } else {
          console.log("ERROR: " + error.reason);
      }
    });
}
});

Template.login.events({
 'submit form'(event){
    event.preventDefault();
    var myEmail = event.target.loginEmail.value;
    var myPassword = event.target.loginPassword.value;

    Meteor.loginWithPassword(myEmail, myPassword, function(error){
      if (Meteor.user()) {
        console.log(Meteor.userId());
      } else {
        console.log("ERROR: " + error.reason);
      }
    });
 }
});

Template.home.events({
 'click .logout'(event){
    event.preventDefault();

    Meteor.logout(function(error) {
      if(error) {
        console.log("ERROR: " + error.reason);
      }
    });
 }
});
