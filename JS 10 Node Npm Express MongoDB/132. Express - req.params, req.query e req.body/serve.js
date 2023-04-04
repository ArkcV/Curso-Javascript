/*carregando o express*/

const express = require('express');
const app = express();


//para o req.body receber informacoes de quando alguem da post ele vai manda algo
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

//? pode ou n ser recebido
app.get('/test/:idUsuarios?', (req ,res) => {
    console.log(req.params)
    res.send(req.params.idUsuarios);
});


app.post('/', (req ,res) => {
    res.send(`Recebi o formulário com ${req.body.nome}`);
    console.log(req.body)
});


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});