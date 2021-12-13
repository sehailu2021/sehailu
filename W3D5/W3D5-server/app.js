const express = require('express');
const bookRouter = require('./routes/books');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/books', bookRouter);
//404
app.use((req,res,next)=>{
    res.status(404).json({error:req.ulr + 'API not supported'})
});
//error handling

app.use((err,req,res,next)=>{
    if(err.message ==="Not Found"){
        res.status(400).json({err:err.message});
    }else{
        res.status(500).json({err:"Something Wrong"});
    }
});

app.listen(5000,()=>console.log('listining on 5000'))

