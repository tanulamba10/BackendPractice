const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then(() => console.log("connnection was successful!"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "kunal",
        to: "namu",
        msg: "padh liya kro, chatting se nhi hoga sab",
        created_at: new Date()
    },
    {
        from: "namu",
        to: "kunal",
        msg: "chup reh, har cheez me ache marks lati hu",
        created_at: new Date()
    },
    {
        from: "tanu",
        to: "sagar",
        msg: "hi baby what's up",
        created_at: new Date()
    },
    {
        from: "sagar",
        to: "tanu",
        msg: "all good baby",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);
