# CNAB

## Sistema báscio para autenticação e cadastro de arquivos cnab.

## Projeto finalizado! 🚀

### Features

- [x] Listagem das movimentações
- [x] Cadastro de movimentação
- [x] Login de usuáio

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Backend](https://github.com/Marcos1710/desafio_cnab)

E na pasta do frontend vá no arquivo: src/services/url.js
nesse arquivo encontra-se o endereço do servidor backend para realizar a comunicação,
nesse arquivo informe o ip da sua máquina na porta "3333" ou deixe como "http://localhost:3333".

```bash
# Endpoint disponível
http://localhost:3333/session - Login usuário
http://localhost:3333/cnab - Cadastra um arquivo
http://localhost:3333/cnabs - Recebe os dados dos arquivos cadastrados
```

### 🎲 Rodando o Front End

```bash
# Vá para a pasta do projeto
$ cd desafio_cnab_front

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$ npm start

# Execute a aplicação em modo de teste
$ npm run test

# Para acessar o sistema você pode utilizar o usuário padrão que foi criado ao rodar as seeds do backend
- email: teste@gmail.com
- senha: 123456

```

### 🛠 Rodando o backend e/ou os testes

```bash
# requisitos: 
- banco de dados postgres intalados
- seguir o passo a passo no README no projeto backend

# Vá para a pasta do projeto
$ cd desafio_cnab

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Execute a aplicação em modo de teste
$ npm run test

```

### 🛠 Tecnologias utilizadas

As seguintes tecnologias foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [React-Router](https://reactrouter.com/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Redux](https://redux.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [Semantic-UI](https://react.semantic-ui.com/)
- [History](https://github.com/ReactTraining/history#readme)
- [Axios](https://github.com/axios/axios)

### Autor

---

# Marcos Santos

[GitHub](https://github.com/Marcos1710)
[linkedin](https://www.linkedin.com/public-profile/in/marcos-samuel-1710)
