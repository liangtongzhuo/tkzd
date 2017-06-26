Router.route('/test', function () {
  this.render('reander', {
    data: function () {
      return {aaa:'aaa'};
    }
  });
});


//全局
// Router.configure({
//   layoutTemplate: 'layout'
// });


Router.route('/post/:_id', function () {
  // 使用名字叫ApplicationLayout的模板做layout
  this.layout('layout');

  // 渲染Post模板到"main"区域
  // {{> yield}}
  this.render('Post');

  // 渲染模板PostAside名字叫"aside"的区域 
  // {{> yield "aside"}}
  this.render('PostAside', {to: 'aside'});

  // 渲染模板PostFooter到"footer"区域 
  // {{> yield "footer"}}
  this.render('PostFooter', {to: 'footer'});
});