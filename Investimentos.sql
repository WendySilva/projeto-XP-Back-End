CREATE DATABASE Investimentos;

USE Investimentos;

CREATE TABLE Investimentos.Clients (
  codClient INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  saldo DECIMAL(30,2) NOT NULL
);

ALTER TABLE Investimentos.Clients AUTO_INCREMENT=1;

CREATE TABLE Investimentos.Investiment (
  codAtivo INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  qtdeAtivo INT NOT NULL,
  valor DECIMAL(10,2) NOT NULL
);

ALTER TABLE Investimentos.Investiment AUTO_INCREMENT=1000;

CREATE TABLE Investimentos.ClientInvestiment (
  codClient INT NOT NULL,
  codAtivo INT NOT NULL,
  qtdeAtivoCliente INT NOT NULL,
  FOREIGN KEY (codClient) REFERENCES Investimentos.Clients (codClient),
  FOREIGN KEY (codAtivo) REFERENCES Investimentos.Investiment (codAtivo)
);

CREATE TABLE Investimentos.Movement (
  codMoviment INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  codClient INT NOT NULL,
  valor DECIMAL(30,2) NOT NULL,
  FOREIGN KEY (codClient) REFERENCES Investimentos.Clients (codClient)
);

ALTER TABLE Investimentos.Movement AUTO_INCREMENT=1;


INSERT INTO Investimentos.Clients (saldo) VALUES 
  (100),
  (200),
  (500);

INSERT INTO Investimentos.Investiment (qtdeAtivo, valor) VALUES 
  (5, 10.00),
  (10, 20.10),
  (15, 2.05);

INSERT INTO Investimentos.ClientInvestiment (codClient, codAtivo, qtdeAtivoCliente) VALUES 
  (1, 1001, 3),
  (1, 1000, 1),
  (2, 1002, 5),
  (2, 1001, 1),
  (3, 1000, 4);

INSERT INTO Investimentos.movement (codClient, valor) VALUES 
  (1, 10.50),
  (1, 20.60),
  (2, 30.30),
  (2, 15.00),
  (3, 25.00);
