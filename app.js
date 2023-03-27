const express = require('express')
const app = express()
const ejs = require('ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json({ limit: '1kb' }))
app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
  res.render('login.ejs');
});
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(`Email: ${email}, Password: ${password}`);
    res.send('Logged in successfully!');
});
  
app.listen(8080, () => { 
    console.log(`server is up on 3000`)
})