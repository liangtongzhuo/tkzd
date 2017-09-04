Router.route('/', {
  action() {
   this.render('Home');
  },
  //这里注册接收数据
  waitOn: function () { return [
    Meteor.subscribe('getBill', '参数')
  ]},
  data: function () { return {

  }}
});