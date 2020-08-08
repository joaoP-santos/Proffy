const express = require("express")
const server = express()
const nunjucks = require('nunjucks')



const pages = {

    landing: (req, res) => {
        return res.render("index.html")
    },
    study: (req, res) => {
        const filters = req.query
        return res.render("study.html", {proffys, filters, subjects, weekdays})
    },
    giveClasses: (req, res) => {
        getSubject = function (subjectNumber) {
            const position = +subjectNumber -1
            return subjects[position]
        }
        const data = req.query
        const isNotEmpty = Object.keys(data).length > 0
        if (isNotEmpty) {
            data.subject = getSubject(data.subject)
            proffys.push(data)
            return res.redirect("/study")
        }
        return res.render("give-classes.html", {subjects, weekdays})

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

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
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