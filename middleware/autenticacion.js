const jwt = require("jsonwebtoken");
const firma = "secreto";

exports.autenticarUsuario = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verificarToken = jwt.verify(token, firma);
    if (verificarToken) {
      req.usuario = verificarToken;
      return next();
    }
  } catch (err) {
    res.json({ error: "Error al validar usuario" });
  }
};

exports.autenticarAdmin = (req, res, next) => {
  if (req.path != "/login") {
    if (!req.headers.authorization) {
      return res.status(403).send({ error: "Error al validar el usuario" });
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, firma, function (error, decoded) {
      if (error)
        return res.status(403).send({ error: "Error al validar el usuario" });
      if (req.method != "GET") {
        if (decoded.rol == "administrador") {
          console.log("decode.rol");
          return next();
        } else {
          res
            .status(403)
            .send({ message: "No tiene los permisos suficientes" });
        }
      }
      return next();
    });
  } else {
    return next();
  }
};
