const express = require('express');
const path = require('path');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res,next)=>{
    res.status(200).sendFile(path.join('views',index.html));
});

// app.use('/product', productRouter);
// app.use('/user', userRouter);


// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

app.use(function(err, req, res, next) {
    console.log('---------------');
    res.status(500).send(`Something broke! ${err}`);
});

const port = app.get('port');

app.listen(port, () => {
    console.log('Your Server is running on ' + port);
});