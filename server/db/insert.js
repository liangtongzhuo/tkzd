import { Mongo } from 'meteor/mongo';

//为数据库插入
let MyCollection = new Mongo.Collection('myCollection');
// var myData = {
//    key1: "value 1...",
//    key2: "value 2...",
//    key3: "value 3...",
//    key4: "value 4...",
//    key5: "value 5..."
// }

// MyCollection.insert(myData);
// //数据库查找且限制
// var findCollection = MyCollection.find({key1: "value 1..."}).fetch();
// console.log(findCollection);
