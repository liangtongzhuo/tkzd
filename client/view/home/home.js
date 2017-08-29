//创建调用
Template.home.onCreated(function () {
    //声明
    this.Data = new ReactiveVar([]);
    this.fromHidden = new ReactiveVar(false);
    //这里面包裹，修改里面 Session 或 ReactiveVar。会自动调用下面包裹的方法。
    Tracker.autorun(() => {
        Meteor.apply('home/get', [{a:'1'}], { wait: true }, (err, res)=> {
            if (!err) this.Data.set(res);
        });
    });
});
//渲染调用
Template.home.onRendered(function () {
})

//设置模版的值，可在模版上获取。
Template.home.helpers({
    title() {
        return '账单';
    },
    Data() {
        return Template.instance().Data.get();
    },
    fromHidden() {
        return Template.instance().fromHidden.get();
    }
})
//设置模版点击事件
Template.home.events({
    'click .item': function (e, template) {
        e.preventDefault();
        //展示表单
        Template.instance().fromHidden.set(true);        
    },
    'click .addBtn': function (e, template) {
        e.preventDefault();
        //展示或隐藏表单
        const bool = Template.instance().fromHidden.get() ? false : true;
        Template.instance().fromHidden.set(bool);
    },
    //提交数据
    'submit #modal_add form' :function (e, template) {
        e.preventDefault();
        console.log('----------', e.target.title.value);
        
        const _id = e.target._id.value;
        const title = e.target.title.value;
        const content = e.target.content.value;
        const pricr = e.target.pricr.value;
        
        Meteor.apply('home/post', [{ _id, title, content, pricr}], { wait: true }, (err, res) => {

        });
    },
    'click #fromHidden': function (e, template) {
        e.preventDefault();
        Template.instance().fromHidden.set(false);
    }
});







