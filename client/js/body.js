import { Template } from 'meteor/templating';

//each 循环
Template.body.helpers({
  paragraphs: [
     { text: "This is paragraph 1..." },
     { text: "This is paragraph 2..." },
     { text: "This is paragraph 3..." },
     { text: "This is paragraph 4..." },
     { text: "This is paragraph 5..." }
  ]
});


