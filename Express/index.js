const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port : ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`welcome to the page of @${username}`);
});

// app.get("/home", (req, res) => {
//     res.send("you contacted home path");
// });

// app.get("/help", (req, res) => {
//     res.send("you contacted help path");
// });

// app.get("*", (req, res) => {
//     res.send("this path doesn't exist");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root path");
// });


// app.use((req, res) => {
//     console.log("request received!");
//     let code = "<h1>HEY</h1> <p>This is a Basic RESPONSE</p>";
//     res.send(code);

// });