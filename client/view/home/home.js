
Template.home.onCreated(function () {
    this.title = new ReactiveVar('账单');
    this.a = new ReactiveVar(5);
    //这里面包裹，修改里面 Session 或 ReactiveVar。会自动调用下面包裹的方法。
    Tracker.autorun(() => {


    });


});

Template.home.onRendered(function () {

})

//设置模版的值，可在模版上获取。
Template.home.helpers({
    title(){
        return Template.instance().title.get();;
    },
    data() {
        return Session.get('a');
    },
    a() {
        return Template.instance().a.get();
    }


})









