//# meteor add session

import { Session } from 'meteor/session';

const myData = {
  key1: "value1",
  key2: "value2"
}

//全局监听 session 的钩子。修改 session，就会调用。
Tracker.autorun(() => {
  // console.log(Session.get('mySession'));
});

Session.set('mySession', 'myData');
const sessionDataToLog = Session.get('mySession');

// console.log(sessionDataToLog);