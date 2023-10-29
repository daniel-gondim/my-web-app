const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});


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

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
