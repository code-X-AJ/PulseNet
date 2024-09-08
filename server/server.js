require('dotenv').config();

const https = require('https')
const app = require('./src/app')
const port = process.env.PORT || 5000;

const server = https.createServer(app);

const startServer = async ()=>{
    server.listen(port, (req,res)=>{
        console.log(`Server sunning at port: ${port}`);
    })
}

startServer();
