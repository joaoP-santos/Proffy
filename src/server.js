const express = require("express")
const server = express()
const nunjucks = require('nunjucks')

const pages = {
    landing: (req, res) => {
        return res.render("index.html")
    },
    study: (req, res) => {
        return res.render("study.html", {proffys})
    },
    giveClasses: (req, res) => {
        return res.render("give-classes.html")
    }
}

const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
        whatsapp: 1928192819381, 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Químico", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
        whatsapp: 1928192819381, 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Químico", 
        cost: "20", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Mayk Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4" , 
        whatsapp: 1928192819381, 
        bio: "Entusiasta das melhores tecnologias de alquimia avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Alquimista", 
        cost: "900", 
        weekday: [4], 
        time_from: [720], 
        time_to: [1220]
    }
    
]

nunjucks.configure('src/views/', {
    express: server,
    noCache: true
})

server
.use(express.static("public"))

.get("/", pages.landing)
.get("/study", pages.study)
.get("/give-classes", pages.giveClasses)

.listen(5500)