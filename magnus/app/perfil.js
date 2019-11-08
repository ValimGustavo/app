class Perfil  {

    constructor (nome, sobrenome){
        this.nome.primero = nome;
        this.nome.sobrenome = sobrenome;
    }
    foto;

    nome = {
        primero : '',
        sobrenome : ''
    };

    endereco = {
        nome : '',
        numero : '',
        complemento : '',
        cidade : '',
        estado : ''
    };
    
    dataNascimento = '';

    cpf = '';

    contato = {
        telefone : '',
        celular : '',
        facebook : '',
        email : ''
    }
}