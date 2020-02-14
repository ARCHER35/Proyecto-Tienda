const express = require('express')
const port = 3000
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()

const mongoose = require('mongoose')
const uri = 'mongodb+srv://frial-criss:frialcriss@cluster0-e5eku.mongodb.net/test'
const options = {useNewUrlParser: true,
                 useCreateIndex: true,
                 useUnifiedTopology: true }
mongoose.connect(uri, options).then(
    () => {console.log('Conectado al Servidor')},
    error => {console.log(error)
    }
)

//middlwares
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

//aplication/x-ww-form-urlencoded
app.use(express.urlencoded({extended:true}))

app.use('/api', require ('./routes/producto'))

//app.get('/', (req,res)=>res.send('hello world con node.js'))
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

app.set('port', process.env.PORT || 3500)
app.listen(app.get('port'), () => console.log('Aqui casual corriendo el puerto:', app.get('port')))
