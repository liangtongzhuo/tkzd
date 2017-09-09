Router.route('/', {
  action() {
   this.render('Home');
  },
  //这里注册接收数据
  waitOn: function () { return [
    Meteor.subscribe('getBill', '参数')
  ]},
  //下面方可以在里面查询已经注册的数据，然后在 template 可以访问到。
  data: function () { return {

  }}
});
