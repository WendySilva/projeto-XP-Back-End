# Projeto Back-end

## API de Investimentos

Nessa API você terá acesso à endpoints que trarão como retorno informações de ativos, clientes, transações e lhe possibilitará efetuar deposito e saques.

Para ter acesso aos arquivos será necessário acessa a branch master desse projeto de dar o git clone através dela:

```
cd git clone git@github.com:WendySilva/projeto-XP-Back-End.git

git checkout master

```

---

## Tecnologias usadas

> Desenvolvido usando: NodeJS, ExpressJS, MYSQL, JavaScript ,  Joi, JWT, Heroku e ClearDB MYSQL.
> 

### Sobre as tecnologias

- NodeJS: interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web;
- ExpressJS: um framework para Node.js que fornece recursos mínimos para construção de servidores web;
- MYSQL: um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface;
- JavaScript: linguagem usada;
- Joi: é um validador de dados;
- JWT: o JSON Web Token é um padrão da Internet para a criação de dados com assinatura opcional e/ou criptografia cujo payload contém o JSON que afirma algum número de declarações;
- Heroku: é uma plataforma de nuvem como serviço que suporta várias linguagens de programação;
- ClearDB MYSQL: plataforma de nuvem para armazenamento de banco de dados.

---

## Instalando Dependências

> Backend
> 

```
git checkout master
npm install

```

---

## Usando o banco localmente

## Banco de Dados

O banco de dados foi desenvolviedo em SQL, no arquivo Investimentos.sql está disponível o seu schema. Para utilizá-lo será necessário copiar o arquivo e criar o banco localmente.

- **Arquivo Investimento.sql:**
    
    ```
    CREATE DATABASE Investimentos;
    
    USE Investimentos;
    
    CREATE TABLE Investimentos.Clientes (
      codCliente INT AUTO_INCREMENT PRIMARY KEY,
      saldo DECIMAL(30,2) NOT NULL
    );
    
    ALTER TABLE Investimentos.Clientes AUTO_INCREMENT=1;
    
    CREATE TABLE Investimentos.Ativos (
      codAtivo INT AUTO_INCREMENT PRIMARY KEY,
      qtdeAtivo INT NOT NULL,
      valor DECIMAL(10,2) NOT NULL
    );
    
    ALTER TABLE Investimentos.Ativos AUTO_INCREMENT=1000;
    
    CREATE TABLE Investimentos.ClienteAtivos (
      codCliente INT NOT NULL,
      codAtivo INT NOT NULL,
      qtdeAtivoCliente INT NOT NULL,
      FOREIGN KEY (codCliente) REFERENCES Investimentos.Clientes (codCliente),
      FOREIGN KEY (codAtivo) REFERENCES Investimentos.Ativos (codAtivo)
    );
    
    CREATE TABLE Investimentos.Movimentacao (
      codMoviment INT AUTO_INCREMENT PRIMARY KEY,
      codCliente INT NOT NULL,
      valor DECIMAL(30,2) NOT NULL,
      tipo VARCHAR(1) NOT NULL,
      FOREIGN KEY (codCliente) REFERENCES Investimentos.Clientes (codCliente)
    );
    
    ALTER TABLE Investimentos.Movimentacao AUTO_INCREMENT=1;
    
    INSERT INTO Investimentos.Clientes (saldo) VALUES
      (100),
      (200),
      (500);
    
    INSERT INTO Investimentos.Ativos (qtdeAtivo, valor) VALUES
      (5, 10.00),
      (10, 20.10),
      (15, 2.05);
    
    INSERT INTO Investimentos.ClienteAtivos (codCliente, codAtivo, qtdeAtivoCliente) VALUES
      (1, 1001, 3),
      (1, 1000, 1),
      (2, 1002, 5),
      (2, 1001, 1),
      (3, 1000, 4);
    
    INSERT INTO Investimentos.Movimentacao (codCliente, valor, tipo) VALUES
      (1, 10.50, "+"),
      (1, 20.60, "-"),
      (2, 30.30, "+"),
      (2, 15.00, "+"),
      (3, 25.00, "-");
    
    ```
    

## Configurando a aplicação

É necessário configurar as variáveis de ambiente no arquivo .env, nesse arquivo deverá ter a porta que será utilizada para rodar a aplicação, o host, seu user do MYSQL, password e o data base utilizado. Nesse projeto utilizaremos o database Investimentos.

- **Arquivo .env.exemple:**
    
    ```
    PORT=
    MYSQL_HOST=
    MYSQL_USER=
    MYSQL_PASSWORD=
    MYSQL_DATABASE=Investimentos
    
    ```
    

obs: Retirar o .exemple do arquivo e configurar as variáveis de ambiente para utilizar a aplicação.

## Executando aplicação

- Para rodar o back-end:
    
    ```
    cd npm run dev
    
    ```
    
    - Para restartar o back-end:
    
    ```
    	cd rs
    
    ```
    

---

## Retorno da API:

> Os endpoints de Ativos e Depósitos são os únicos possíveis de acessar sem fazer o login, os demais são necessários gerar o token no login, pois só é possível sacar, comprar ativos ou consultar saldo na conta logada e com o token salvo no header com a chave Authorization.
> 

Você pode usar uma plataforma de API, como o postman ou o insomnia, para consultar as rotas e os retornos.

- endpoint GET de Ativos:
    
    [https://wendysilva-projetobackend.herokuapp.com/ativos](https://wendysilva-projetobackend.herokuapp.com/ativos/)
    
    > retorna todos os ativos e a quantidade vendida de cada um:
    > 
    
    ```
    [
      {
          "codAtivo": 1000,
          "qtdeVendida": "6"
      },
      {
          "codAtivo": 1001,
          "qtdeVendida": "4"
      },
      {
          "codAtivo": 1002,
          "qtdeVendida": "13"
      }
    ]
    
    ```
    
- endpoint POST:
    
    [https://wendysilva-projetobackend.herokuapp.com/conta/deposito](https://wendysilva-projetobackend.herokuapp.com/conta/deposito)
    
    > será necessário informar o código do cliente e o valor para depósito:
    > 
    
    ```
    {
      "codCliente": 1,
      "valor": 60
    }
    
    ```
    

> Nos demais endpoints será necessário o token, então deve ser feito o login e anotar seu retorno.
> 
- endpoint POST Login:
    
    [https://wendysilva-projetobackend.herokuapp.com/login](https://wendysilva-projetobackend.herokuapp.com/login)
    
    > é necessário informar o código do cliente, o código do ativo e a quantidade desejada
    > 
    
    ```
    // body:
    
    {
        "email": "fernanda@email.com",
        "senha": 12345678
    }
    
    // retorno 
    
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlcm5hbmRhQGVtYWlsLmNvbSIsImNvZENsaWVudGUiOjMsImlhdCI6MTY1ODcwMTY1NCwiZXhwIjoyMDE4NzAxNjU0fQ.gDtXd4AwbQRLWrReZomWN_jXMSZNd7SxK6_QkUfCdao"
    }
    
    ```
    
- endpoint POST investimento:
    
    [https://wendysilva-projetobackend.herokuapp.com/investimentos/comprar](https://wendysilva-projetobackend.herokuapp.com/investimentos/comprar)
    
    > é necessário informar o código do cliente, o código do ativo e a quantidade desejada
    > 
    
    ```
    {
      "codCliente": 1,
      "codAtivo": 1002,
      "qtdeAtivo": 1
    }
    
    ```
    
- endpoint GET:
    
    [https://wendysilva-projetobackend.herokuapp.com/ativos/1](https://wendysilva-projetobackend.herokuapp.com/ativos/1)
    
    > é necessário informar um id, quando o id informado for de um cliente o retorno será seus investimentos:
    > 
    
    ```
    [
      {
        "CodCliente": 1,
        "codAtivo": 1000,
        "qtdeAtivo": "2",
        "Valor": "10.00"
      },
      {
        "CodCliente": 1,
        "codAtivo": 1001,
        "qtdeAtivo": "3",
        "Valor": "20.10"
      },
      {
        "CodCliente": 1,
        "codAtivo": 1002,
        "qtdeAtivo": "7",
        "Valor": "2.05"
      }
    ]
    
    ```
    
    [https://wendysilva-projetobackend.herokuapp.com/ativos/1001](https://wendysilva-projetobackend.herokuapp.com/ativos/1001)
    
    > quando o id for de um ativo o retorno será:
    > 
    
    ```
    [
      {
          "codAtivo": 1000,
          "qtdeAtivo": 4,
          "valor": "10.00"
      }
    ]
    
    ```
    
- endpoint POST:
    
     [https://wendysilva-projetobackend.herokuapp.com/conta/saque](https://wendysilva-projetobackend.herokuapp.com/conta/saque)
    
    > será necessário informar o código do cliente e o valor de saque, mas só será possível efetuar o saque se houver valor suficiente em conta:
    > 
    
    ```
    {
      "codCliente": 1,
      "valor": 60
    }
    
    ```
    
- endpoint GET:
    
    [https://wendysilva-projetobackend.herokuapp.com/conta/1](https://wendysilva-projetobackend.herokuapp.com/conta/1)
    
    > será necessário informar o id do cliente e o retorno será:
    > 
    
    ```
    [
      {
          "codCliente": 1,
          "saldo": "46944.60"
      }
    ]
    
    ```

Qualquer dúvida ou sugestão: 

[https://www.linkedin.com/in/wendyss/](https://www.linkedin.com/in/wendyss/)
