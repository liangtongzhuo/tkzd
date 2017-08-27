Template.home.onCreated(function () {
    //声明
    this.Data = new ReactiveVar();
    
    //这里面包裹，修改里面 Session 或 ReactiveVar。会自动调用下面包裹的方法。
    // Tracker.autorun(() => {


    // });

    this.Data.set([
        {
            title: '饮食',
            content: '买水果',
            pricr: '10'
        }, {
            title: '饮食',
            content: '买水果',
            pricr: '10.5'
        }, {
            title: '饮食',
            content: '矿泉水',
            pricr: '1',
        }, {
            title: '饮食',
            content: '买水果',
            pricr: '10'
        }, {
            title: '饮食',
            content: '买水果',
            pricr: '10.5'
        }, {
            title: '饮食',
            content: '矿泉水',
            pricr: '1',
        }, {
            title: '饮食',
            content: '买水果',
            pricr: '10'
        }, {
            title: '饮食',
            content: '买水果',
            pricr: '10.5'
        }, {
            title: '饮食',
            content: '矿泉水',
            pricr: '1',
        },
    ]);

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
    'click item': function (e, template) {
        e.preventDefault();
        console.log(this);
    }
});







