const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()
const axios = require('axios')

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let correctNews = []
function getNews() {
// chiamata Axios a newsapi
    axios.get('https://newsapi.org/v2/top-headlines?country=it&apiKey=4952a6450f2d4dfba7da3fe8596d3e44').then((response) => {
        let news = response.data.articles

        // variabile che verrà mandata al front-end 
        news.forEach(el => {

            // controllo che il campo autore non sia nullo 
            if (el.author != null) {
                const authorArray = el.author.split(' ')

                //controllo che il nome dell'autore sia tra le 2 e le 3 parole
                if (authorArray.length >=2 && authorArray.length <=3) {
                    correctNews.push(el)
                }
            }
        })
    })
}

getNews()

app.get('/api/getAllNews', (req, res) => {
    res.send(correctNews)
    })


app.listen(3000)