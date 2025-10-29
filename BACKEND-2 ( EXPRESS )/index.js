const express = require("express");
const app = express();
const port = 8080;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});
// app.use((req,res) =>{
//    console.log("request received");
//    res.send("this is basic response it can be bool ,string ,standerd html which parse in to json form");
// });
app.get("/search",(req,res)=>{
    res.send("you contacted search path");
});
app.get("/",(req,res)=>{
    res.send("hello i am root path");
});
app.get("/home",(req,res)=>{
    res.send("you contected home path");
})
// app.get("*",(req,res)=>{
//     res.send("path does not exist");   // exept these two path that are written upword
// });         
app.get("/:username/:userID",(req,res)=>{
    let {username,userID} = req.params;
    res.send(`welcome to the page of ${userID}`);
})
app.get("/result", (req, res) => {
  const query = req.query;
  res.send(`Search for: ${query.q}, Category: ${query.category}`);
});
