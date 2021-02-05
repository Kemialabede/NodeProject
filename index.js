const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors());

app.get('/', (req, res)=>{
    res.json({
        name: 'Kemi',
        office: 'Enyata',
        State: 'Chicago',
        date: new Date()
    })
})

app.post('/register', (req, res) => {
    let name = req.body.name;
    let state = req.body.state;
    let phone = req.body.phone;

    res.status(200).json({
        name, state, phone, message: 'successfully registered'
    })
})

app.post('/order', (req, res) => {
    let name = req.body.name;
    let order = req.body.order;
    let quantity = req.body.quantity;
    let address = req.body.address; 

    res.status(200).json({
        name, order, quantity, address, message: 'your order has been received'
    })
})

let port = process.env.PORT;

if (port == null || port == ''){
    port = 3200
}

app.listen(port , ()=>{
    console.log('server is running at port: 3200')
})