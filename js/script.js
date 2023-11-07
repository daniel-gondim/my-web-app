function validarLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const email = document.getElementById();
    const senha = "admin123";

    if (!username) {
        window.alert("O campo usuário tem que ser preenchido");
    } else if (!password) {
        window.alert("O campo senha tem que ser preenchido");
    } else if (username !== email) {
        window.alert('Email incorreto. Favor tentar novamente.');
    } else if (password !== senha) {
        window.alert('Senha incorreta. Favor conferir a senha e tentar novamente!');
    } else {
        window.location.href = '../login-sucess-page.html';
    }
}