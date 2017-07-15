
Template.home.onCreated(function(){
    
    Session.set('a','bbb');
    this.a = new ReactiveVar(5);
    

    Tracker.autorun( ()=> { 
        console.log(Session.get('a'));     
        console.log(this.a.get());
    });
    //定时器更新， 会更新上面 autorun
    Meteor.setTimeout(()=> {
        Session.set('a','vvvvvv');
        this.a.set(50);
    }, 1000);
});

Template.home.onRendered(function(){

})
//设置模版的值
Template.home.helpers({
    data:function(){
		return Session.get('a');
	},
    a: function(){
        return Template.instance().a.get();
    }
   
})









