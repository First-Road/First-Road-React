function autenticarUsuario(email, senha) {
    // Valores de email e senha definidos
    const users = [
        { email: 'admmaster@vw.com', senha: 'adm123', tipoUsuario: 'administrador' },
        { email: 'gestor@vw.com', senha: 'gestor123', tipoUsuario: 'gestor' },
        { email: 'colaborador@vw.com', senha: 'colaborador123', tipoUsuario: 'colaborador' },
    ];

    const usuarioBuscado = users.find((u) => u.email === email && u.senha === senha);

    if (usuarioBuscado) {
        // Autenticação bem-sucedida
        return usuarioBuscado.tipoUsuario;
    } else {
        // Autenticação falhou
        alert('Email ou senha incorretos');
        return null;
    }
}

function redirecionarUsuario(tipoUsuario) {
    // Redirecione o usuário com base no tipo de usuário
    switch (tipoUsuario) {
        case 'administrador':
            window.location.href = "../PerfilConectadoStatic/index.tsx";
            break;
        case 'gestor':
            window.location.href = "../Gestor/PerfilGestor/index.tsx";
            break;
        case 'colaborador':
            window.location.href = "/HomeColaborador";
            break;
        default:
            break;
    }
}

// Exemplo de uso:
const email = 'admmaster@vw.com';
const senha = 'adm123';

const tipoUsuario = autenticarUsuario(email, senha);

if (tipoUsuario) 

{

    redirecionarUsuario(tipoUsuario);
}
