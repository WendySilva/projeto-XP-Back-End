const connection = require('./connection');

const validandoUsuario = async (email) => {
  console.log('MODEL')
  const query = 'SELECT * FROM Usuarios WHERE email = ?';
  const [usuarios] = await connection.execute(query, [email]);

  return usuarios;
}

module.exports = { validandoUsuario }