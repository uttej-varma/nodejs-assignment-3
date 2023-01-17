
const fs=require("fs");
const http=require("http");
 const path=require("path");
const writeFile= (filename,filecontent)=>{
    const data=fs.writeFile("index.html",`<h1> Hello World </h1>
    <p> This is uttej ... </p>
    `,(err)=>{console.log(err)});
   
}

const server=http.createServer((req,res)=>{
    writeFile();
     console.log("uttej");

    fs.readFile("index.html",{encoding:"utf-8"},(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            return res.end();
        }
    })
     
   
})

server.listen(3500,()=>{console.log("Server is up at 3500")})