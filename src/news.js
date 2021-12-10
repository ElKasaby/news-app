const request = require('request')
const news = (category,callback) =>{
    const url = 'https://newsapi.org/v2/everything?q='+category+'&from=2021-11-10&sortBy=publishedAt&apiKey=93ec6849ba724d8ca45b61ecacaf3c54'

    request({url,json:true},(error,response)=>{
        if(error){
            // console.log('Unable to connect news service');
            callback('Unable to connect news service',undefined)
        }
        else if(response.body.message){
            // console.log(response.body.message);
            callback(response.body.message,undefined)
        }
        else{
            const data=[]
            response.body.articles.forEach(news => {
                data.push({
                    title:news.title,
                    description:news.description,
                    urlToImage:news.urlToImage,
                    url:news.url
                })
                // callback(undefined,{title:news.title,description:news.description,urlToImage:news.urlToImage,url:news.url} )
                // console.log(news.title+"\n"+news.description+"\n"+news.urlToImage+"\n"+news.url);
            });
            // console.log(response.body.articles);
            // console.log(data);
            callback(undefined, data)
        }
    })
}
module.exports = news