const express = require('express');
const server = express();
const port = 5000;

const mysql = require('mysql2');

server.use(
    express.urlencoded({
        extended: true
    })
);

server.use(express.json());

//CORS
const cors = require('cors');
server.use(cors());

//Rota para cadastrar usuários
server.post('/usuario/criar', ( req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha    
    const tipo = req.body.tipo

    const sql = `INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_tipo) VALUES (?, ?, ?, ?)`
    const data = [nome, email, senha, tipo]

    conn.query(sql, data, (err) => {
        if(err) {
            console.log(err)
            res.status(500).json(err.sqlMessage).end()
        } else {
            res.status(200).json("Cadastro realizado!").end()
        }

    });
});

server.get('/', (req, res) => {
    res.status(200);
    res.end();
});


// Configura uma conexão com o banco de dados MySQL
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudfinal',
    connectionLimit: 10
    
});

//criando conexão com o banco de dados
conn.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log("DEU CERTO")
        server.listen(port, () => {
            console.log(`servidor rodando em http://localhost:${port}`)
        });
    }
})



