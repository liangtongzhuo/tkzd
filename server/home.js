//发布数据
Meteor.publish('getBill', function (options) {
  console.log('----------',options);
  return G_bill.find({}, { limit: 100 });
});



//定义方法
Meteor.methods({
  //前端传送过来的请求
  'home/get': function (options) {
    // console.log(options);
    // console.log('----------，如果当前用户登录了，可以拿到是那个用户的id', Meteor.userId());
    //数据库查询
    return G_bill.find({},{limit:100}).fetch();
  },
  'home/post': function (obj) {
    // console.log(obj);
    //一般会在这里验证数据，然后再往数据库里面存。
    if (obj._id) {
      G_bill.update(obj._id, { $set: obj });
    } else {
      obj.time = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
      G_bill.insert(obj);
    }
  }, 
  'home/remove': function (obj) {
    if (obj._id) {
      G_bill.remove(obj._id);
    } 
  },

});

//时间
Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}