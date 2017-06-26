

Meteor.call('method1', 'aaa', function (error, result) {
  if (error) {
    //   console.log(error);
    } else {
        // console.log('Method 1 result is: ' + result);
      }
  }
);

Meteor.call('method2', 5, function (error, result) {
  if (error) {
    //   console.log(error);
  } else {
    //   console.log('Method 2 result is: ' + result);
  }
});
