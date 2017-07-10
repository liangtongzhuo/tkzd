
Template.home.onCreated(function(){
   Tracker.autorun( function() { 
      
        this.aaint = 0;
        console.log(this.aaint);
          //自动调用
        // aa(Session.get('a'));
   });

});

function aa (){
    console.log('======',arguments[0]);
    console.log('------',this.aaint)
}


Template.home.onRendered(function(){
    Meteor.settimeout(function (){
        this.aaint = 1;
    },1000);
})

// Session.set('a','b');
//设置模版的值
Template.home.helpers({
    data:function(){
		return Session.get('a');
	},
    aint:function(){
        console.log(this.aaint);
        return this.aaint;
    }
})


//场馆
// Venues = new Mongo.Collection('venues');
Meteor.setTimeout(()=> {
    // console.log(Venues);
    // Session.set('a','vvvvvv');
    
}, 1000);




