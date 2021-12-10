const express = require('express')
const path = require('path')
const hbs = require('hbs')
const news = require('./news')


const app = express()

//public
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

// hbs
app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath)


app.get('/',(req,res)=>{

    news('egypt',(error,data)=>{
        if(error){
            return res.send({error})
        }
        res.render('news',{
            data:data
        })
    })
})

// url:data.urlToImage,
// title:data.title,
// body:data.description,
// go:data.url















const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
