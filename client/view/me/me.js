//设置模版的值，可在模版上获取。
Template.me.helpers({
    title() {
        return '我';
    },
})


Template.register.events({
    'submit form': function (event) {
        event.preventDefault();

        var registerData = {
            email: event.target.registerEmail.value,
            password: event.target.registerPassword.value
        }

        Accounts.createUser(registerData, function (error) {
            if (Meteor.user()) {
                alert('成功：'+Meteor.userId());
            } else {
                alert("ERROR: " + error.reason);
            }
        });
    }
});

Template.login.events({
    'submit form': function (event) {
        event.preventDefault();
        var myEmail = event.target.loginEmail.value;
        var myPassword = event.target.loginPassword.value;

        Meteor.loginWithPassword(myEmail, myPassword, function (error) {
            if (Meteor.user()) {
                alert('登陆成功'+Meteor.userId());
            } else {
                alert("错误 " + error.reason);
            }
        });
    }
});

Template.success.events({
    'click .logout': function (event) {
        event.preventDefault();

        Meteor.logout(function (error) {
            if (error) {
                alert("错误 " + error.reason);
            }
        });
    }
});


Template.success.onCreated(function () {
    console.log('----------', Meteor.userId());
})