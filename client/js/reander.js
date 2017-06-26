
Meteor.startup(()=> {
  //渲染
  const reander = Template.reander;//模版
  const dom = document.getElementById('reander');//渲染到 dom

  const s = Blaze.render(reander, dom);
  //三秒后消失
  Meteor.setTimeout(function() {
         Blaze.remove(s);
        }, 3000);
  
});
