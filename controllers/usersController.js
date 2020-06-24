const sequelize = require("../mysql");
const jwt = require('jsonwebtoken');
const firma = 'secreto';

exports.getUsuario = (req, res) => {
  sequelize
    .query("SELECT * FROM usuarios", { type: sequelize.QueryTypes.SELECT })
    .then(function (resultados) {
      console.log(resultados);
      res.json(resultados);
    });
};

exports.getUsuarioId = (req, res) => {
  const id_usuario = req.params.id_usuario;
  sequelize
    .query("SELECT * FROM usuarios WHERE id_usuario =" + id_usuario, {
      type: sequelize.QueryTypes.SELECT,
    })
    .then(function (resultados) {
      console.log(resultados);
      res.json(resultados[0]);
    });
};

exports.postUsuario = (req, res) => {
  console.log(req.body);
  const nombre_usuario = req.body.nombre_usuario;
  const nombre_completo = req.body.nombre_completo;
  const correo_electronico = req.body.correo_electronico;
  const telefono = req.body.telefono;
  const direccion_de_envio = req.body.direccion_de_envio;
  const contrasena = req.body.contrasena;
  const rol = req.body.rol;

  sequelize
    .query(
      "INSERT INTO usuarios (nombre_usuario, nombre_completo, correo_electronico, telefono, direccion_de_envio, contrasena, rol ) VALUES (?, ?, ?, ?, ?, ?, ?)",
      {
        replacements: [
          nombre_usuario,
          nombre_completo,
          correo_electronico,
          telefono,
          direccion_de_envio,
          contrasena,
          rol,
        ],
      }
    )
    .then(function (resultados) {
      console.log(resultados);
      const nuevo_usuario = {
        id_usuario: resultados[0],
        nombre_usuario,
        nombre_completo,
        correo_electronico,
        telefono,
        direccion_de_envio,
        contrasena,
        rol,
      };
      res.json(nuevo_usuario);
    });
};

exports.deleteUsuario = (req, res) => {
  const id_usuario = req.params.id_usuario;
  sequelize
    .query("DELETE FROM usuarios WHERE id_usuario = ?", {
      replacements: [id_usuario],
    })
    .then(function (resultados) {
      console.log(resultados);
      res.send("Usuario borrado con éxito");
    });
};

exports.loginUsuario = (req, res) => {
  const nombre_usuario = req.body.nombre_usuario;
  const contrasena = req.body.contrasena;
  sequelize
    .query("SELECT * FROM usuarios WHERE nombre_usuario = ? AND contrasena = ?", {
      replacements: [nombre_usuario, contrasena], type: sequelize.QueryTypes.SELECT,
    })
    .then(function (resultados) {
      if(resultados[0]) {
        const usuario = resultados[0];
        const token = jwt.sign(usuario,firma);
        console.log(resultados[0]);
        res.json({token});
      }
      res.send('Usuario y/o contraseña incorrecto');
    });
};
