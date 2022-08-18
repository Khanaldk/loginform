import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import morgan from 'morgan';
import router from './routes/web.js';
import connectDB from './db/connectdb.js';
const app=express();

//for port
const port = process.env.PORT

//for connecting database 
const DATABASE_URL=process.env.DATABASE_URL
connectDB(DATABASE_URL)

//for setting template engine
app.set('view engine','ejs')


app.use(express.urlencoded({extended:true}))

//Load routes
app.use('/',router);

app.listen(port,(req,res)=>
{
    console.log(`listening to port ${port}`)
})
//format
//morgan
//1.tiny contains predefined tokens
//2.dev where dev contains tokens  :method :URL:status :response time