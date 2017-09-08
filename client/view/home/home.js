//创建调用
Template.home.onCreated(function () {
    //声明
    // this.Data = new ReactiveVar([]);
    // this.update = new ReactiveVar();
    this.fromHidden = new ReactiveVar(false);
    this.object = new ReactiveVar();

    //  API 形式的与后端交互。 
    //这里面包裹，修改里面 Session 或 ReactiveVar，会自动调用下面包裹的方法。
    //注意传的参数，后端可以获取到。
    // Tracker.autorun(() => {
        // this.update.get();
        // Meteor.apply('home/get', [{a:'1'}], { wait: true }, (err, res)=> {
        //     if (!err) this.Data.set(res);
        // });
    // });

    // 任何地方都可以用 Session 访问到是一个健值，但是 F5 刷新页面会丢失所有 Session。
    //Session.set('G_aaaaa', false);
    //const a = Session.get('G_aaaaa');
    // ostrio: cookies  这个插件F5 刷新不会丢失。需要安装

});
//渲染调用
Template.home.onRendered(function () {
})

//设置模版的值，可在模版上获取。
Template.home.helpers({
    name() {
        return '账单';
    },
    //1.后端设计接口，2.声明 ReactiveVar 3.第9行调用接口，4 这里传送到前端。
    // Data() {
    //     return Template.instance().Data.get();
    // },
    Data() {
        //注册和发布与后端交互数据
        //1.后端发布数据，2.路由注册接收数据，3.这里才能查询出来数据。 这种方法，实时性好，更改数据库，前端会自动更新界面。
        return G_bill.find({}, { limit: 100, sort: { time: -1 }}).fetch();
    },
    fromHidden() {
        return Template.instance().fromHidden.get();
    },
    object(){
        return Template.instance().object.get();
    }
})
//设置模版点击事件
Template.home.events({
    'click .item': function (e, template) {
        e.preventDefault();
        //删除
        // Meteor.apply('home/remove', [{_id:this._id}], { wait: true }, (err, res) => {
        // });

        //传值
        template.object.set(this);

        // Template.instance().fromHidden.set(true);        
        template.fromHidden.set(true);   //上面一句和这句等价,都可访问到变量，建议用这行的。
        
    },
    'click .addBtn': function (e, template) {
        e.preventDefault();
        
        //清空值
        template.object.set({});
        //展示或隐藏表单
        const bool = template.fromHidden.get() ? false : true;
        template.fromHidden.set(bool);
    },
    //提交数据
    'submit #modal_add form' :function (e, template) {
        e.preventDefault();
        // console.log('----------', e.target.title.value);
        const _id = e.target._id.value;
        const title = e.target.title.value;
        const content = e.target.content.value;
        const pricr = e.target.pricr.value;
        
        let obj
        if (_id) {
             obj = { _id, title, content, pricr };
        } else {
             obj = { title, content, pricr };
        }

        Meteor.apply('home/post', [obj], { wait: true }, (err, res) => {
            if(err) alert(err);

            // 刷新界面
            // template.update.set(new Date);
            template.fromHidden.set(false);
        });
    },
    'click #fromHidden': function (e, template) {
        e.preventDefault();
        template.fromHidden.set(false);
    }
});


Template.modal_Add.onCreated(function () {
    console.log('----------',this.object);
})


