
Meteor.methods({
  //前端传送过来的请求
  'home/get': function (options) {
    // console.log(options);
    // console.log('----------，如果当前用户登录了，可以拿到是哪个用户发送的请求', Meteor.userId());
    //数据库查询
    return G_bill.find({},{limit:100}).fetch();
  },
  'home/post': function (obj) {
    // console.log(obj);
    //一般会在这里验证数据，然后再往数据库里面存。
    if (obj._id) {
      G_bill.update(obj._id, { $set: obj });
    } else {
      obj.date = new Date();
      G_bill.insert(obj);
    }
  }, 
  'home/remove': function (obj) {
    if (obj._id) {
      G_bill.remove(obj._id);
    } 
  },

});