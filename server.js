const express = require("express");
const app = express();
const path = require("path");
//const PORT = process.env.PORT || 3001;
const PORT = 3001;
app.use(express.static(__dirname + "/public", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public/html/index.html"))
    console.log("hmtl sending")
})

// start the server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));