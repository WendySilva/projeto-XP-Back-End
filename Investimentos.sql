CREATE DATABASE Investimentos;

USE Investimentos;

CREATE TABLE Investimentos.Usuarios (
  codCliente INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(10) NOT NULL,
  email VARCHAR(40) NOT NULL,
  senha INT NOT NULL
);

ALTER TABLE Investimentos.Usuarios AUTO_INCREMENT=1;

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

INSERT INTO Investimentos.Usuarios (nome, email, senha) VALUES 
  ('Joana', 'joana@email.com', 12345678),
  ('Joao', 'joao@email.com', 12345678),
  ('Fernanda', 'fernanda@email.com', 12345678);

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
