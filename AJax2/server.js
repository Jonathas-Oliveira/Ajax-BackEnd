const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))// serve a todas as pagicas estaticas

app.use(bodyParser.urlencoded({ extended: true }))//serve aos formularios json, transformando em objeto
app.use(bodyParser.json())//faz conversão do form para obj

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {//local da pasta do arquivo
        callback(null, '.')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario',(req,res) =>{
    res.send({
        ...req.body,
        id:'six66'
    })
})


app.listen(8080, () => console.log('Executando...'))