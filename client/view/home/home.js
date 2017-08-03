
Template.home.onCreated(function () {

    this.Data = new ReactiveVar(5);
    //这里面包裹，修改里面 Session 或 ReactiveVar。会自动调用下面包裹的方法。
    Tracker.autorun(() => {


    });


});

Template.home.onRendered(function () {
    // console.log('渲染了模版');
})

//设置模版的值，可在模版上获取。
Template.home.helpers({
    title(){
        return '账单';
    },
    Data() {
        return Template.instance().Data.get();
    }
})

Template.home.events({
    'click #xxx item': function (e, template) {
        e.preventDefault();
        console.log(this);
    }
});







