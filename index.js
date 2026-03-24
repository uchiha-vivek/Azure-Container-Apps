const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Azure Container Apps");
});

app.get("/test",function(req,res){
  res.send('Testing azure container apps')
})


app.get("/health",function(req,res){
  res.send('System health is fine')
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});