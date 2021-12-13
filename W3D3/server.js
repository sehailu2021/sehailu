const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.on('request', function(req,res){
    res.writeHead(200,{'Content-Type': 'image/jpg'});
    let image = fs.readFileSync('./titles.jpg');
    res.end(image,'binary');
});
server.listen(3000);

// server.on('request',(req,res)=>{
//     fs.readFile('./titels.jpg',(err,data)=>{
//         if(err) throw err;
//         Response.end(data);
//     });
// });
// server.listen(5000)

//this is the best way for performance
// server.on('request', (req,res)=>{
//     fs.createReadStream('./titles.jpg').pipe(res);
// });
// server.listen(8000);



