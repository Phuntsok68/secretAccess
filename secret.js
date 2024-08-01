import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  // console.log(__dirname + "/public/middle.html");
  res.sendFile(__dirname + "/index.html");
  
});

app.post("/check",(req,res)=>{
    // console.log(req.body);
    if(req.body['password']==='ILoveProgramming'){
        res.sendFile(__dirname+"/secret.html");
    }
    else{
    res.sendFile(__dirname+"/index.html")
}
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
