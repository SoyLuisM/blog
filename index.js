const express = require('express');
const exhan = require('express-handlebars');
const path = require('path');

const router = require('./src/network/routes');
const { config } = require('./config');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname,'/src/views'));
app.engine('.hbs',exhan({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views') ,'layouts'),
    partialsDir: path.join(app.get('views') ,'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

router(app);

app.listen(config.port, ()=>{
    console.log(`escuchando en el puerto: ${config.port}`);
});

//capura promesas no capturadas
process.on('unhandledRejection',error =>{
    // console.error('UnhandledRejection',error)
    server.log('unhandledRejection',error)
})
//captura excepciones no capturadas
process.on('uncaughtException',error =>{
    // console.error('UncaughtException',error)
    server.log('UncaughtException',error)
})