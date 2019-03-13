const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//    console.log(result);
//});

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

//Todo.findByIdAndRemove({_id: '5c88c65eadc3506e40ed34c9'}).then((todo) => {
//    console.log(todo);
//});

Todo.findByIdAndRemove('5c88c65eadc3506e40ed34c9').then((todo) => {
    console.log(todo);
});