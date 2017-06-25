


//为数据库插入
MyCollection = new Mongo.Collection('myCollection');
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

//查找
// var findCollection = MyCollection.find().fetch();

// console.log(findCollection);
// var myId = findCollection[0]._id;

// var updatedData = {
//    key1: "updated value 1...",
//    key2: "updated value 2...",
//    key3: "updated value 3...",
//    key4: "updated value 4...",
//    key5: "updated value 5..."
// }
// //修改
// MyCollection.update(myId, updatedData);
// var findUpdatedCollection = MyCollection.find().fetch();
// console.log(findUpdatedCollection);


//删除
// var findCollection = MyCollection.find().fetch();
// var myId = findCollection[0]._id;
////删除 ,也可以设置kay value
// MyCollection.remove(myId);

// var findDeletedCollection = MyCollection.find().fetch();
// console.log(findDeletedCollection);