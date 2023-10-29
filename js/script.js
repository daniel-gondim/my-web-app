function validarLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(!username) {
        window.alert("O campo usuário tem que ser preenchido");
    } else if (!password) {
        window.alert("O campo senha tem que ser preenchido");
    } else {
        window.alert('O login foi realizado com sucesso!');
    }
}