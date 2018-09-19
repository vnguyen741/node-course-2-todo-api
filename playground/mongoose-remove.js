const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '5ba1ade9e31b587da2835020'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5ba1ade9e31b587da2835020').then((todo) => {
    console.log(todo);
});