const mongoose = require('mongoose');

main()
    .then(() => console.log("connnection was successful!"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema); //Class as models

//Object from the model as a Document
// const user2 = new User({
//     name: "namu",
//     email: "namu@gmail.com",
//     age: 17
// });

// user2
//     .save()
//     .then(res => console.log(res)); //Async fn, returns a promise

// User.insertMany([
//     { name: "rana", email: "rana@gmail.com", age: 23 },
//     { name: "kunal", email: "kunal@gmail.com", age: 14 },
//     { name: "renu", email: "renu@gmail.com", age: 44 },
//     { name: "dharam", email: "dharam@gmail.com", age: 49 }
// ])
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

//FIND Operation
// User
//     .findById("66b6feb58b11b231bc58fc73")
//     .then(res => console.log(res));

//UPDATE Operation
// User
//     .updateMany({ age: { $lte: 20 } }, { age: 19 })
//     .then(res => console.log(res));
// User
//     .findOneAndUpdate({ name: "tanu" }, { age: 21 }, { new: true })
//     .then(res => console.log(res));
// User
//     .findByIdAndUpdate("66b6f558f17adc35d120d7de", { age: 20 }, { new: true })
//     .then(res => console.log(res));

//DELETE Operation
// User
//     .deleteMany({ age: { $lt: 20 } })
//     .then(res => console.log(res));
// User
//     .findByIdAndDelete("66b6feb58b11b231bc58fc73")
//     .then(res => console.log(res));
// User
//     .findOneAndDelete({ name: "dharam" })
//     .then(res => console.log(res));