const express = require('express');
const {join} = require("path");
const app = express();
const router = express.Router();
const port = 3000;


app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

//configura rota para a página de login
app.get('/index.html', (req, res) => {
    const indexPath = join(__dirname, '../index.html');
    res.sendFile(indexPath);
})

// configura rota para a página de sucesso
app.get('/login-sucess-page.html', (req, res) => {
    const indexPath = join(__dirname, '../login-sucess-page.html');
    res.sendFile(indexPath);
})

router.get('/', (req, res) => {

})

router.post('/users', (req, res) => {

})

// Rota para excluir um usuário (por exemplo)
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id; // Obtém o ID do usuário da URL
    // Lógica para excluir o usuário com o ID fornecido
    // Isso pode envolver interação com um banco de dados ou outro armazenamento
    res.send(`Usuário com ID ${userId} excluído com sucesso.`);
});

app.listen(port, () => {
    console.log('Servidor rodando na porta 3000');
});