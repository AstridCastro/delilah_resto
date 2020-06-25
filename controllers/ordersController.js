const sequelize = require("../mysql");

exports.getOrders = (req, res) => {
  sequelize
    .query("SELECT * FROM pedidos", { type: sequelize.QueryTypes.SELECT })
    .then(function (resultados) {
      console.log(resultados);
      res.json(resultados);
    });
};

exports.getOrdersId = (req, res) => {
  sequelize
    .query("SELECT * FROM pedidos WHERE id_pedido = ?", {
      replacements: [id_pedido],
      type: sequelize.QueryTypes.SELECT,
    })
    .then(function (resultados) {
      console.log(resultados);
      res.json(resultados[0]);
    });
};

exports.postOrders = async (req, res) => {
  console.log(req.body);
  const estado = req.body.estado;
  const hora = req.body.hora;
  const metodo_de_pago = req.body.metodo_de_pago;
  const id_usuario = req.usuario.id_usuario;
  const fecha_creacion = req.body.fecha_creacion;
  const fecha_actualizacion = req.body.fecha_actualizacion;
  const productos = req.body.productos;

  const resultados = await sequelize.query(
    "INSERT INTO pedidos (estado, hora, metodo_de_pago, id_usuario, fecha_creacion, fecha_actualizacion) VALUES (?, ?, ?, ?, ?, ? )",
    {
      replacements: [
        estado,
        hora,
        metodo_de_pago,
        id_usuario,
        fecha_creacion,
        fecha_actualizacion,
      ],
    }
  );

  const id_pedido = resultados [0]
  productos.forEach (async(producto) => {
    await sequelize.query(
      "INSERT INTO pedidos_productos (id_pedido, id_producto, cantidad) VALUES (?, ?, ?)",
      {
        replacements: [id_pedido, producto.id_producto, producto.cantidad],
      }
    );
  })

  const nuevo_pedido = {
    id_pedido,
    estado,
    hora,
    metodo_de_pago,
    id_usuario,
    fecha_creacion,
    fecha_actualizacion,
    productos,
  };
  res.json(nuevo_pedido);
};

exports.deleteOrders = (req, res) => {
  const id_pedido = req.params.id_pedido;
  sequelize
    .query("DELETE FROM pedidos WHERE id_pedido = ?", {
      replacements: [id_pedido],
    })
    .then(function (resultados) {
      if(resultados[0].affectedRows>0)
      res.json({message:"Pedido borrado con éxito"});
      else res.status(404).json({error:"El pedido no existe"});
    });
};


exports.updateOrders = (req, res) => {
  console.log(req.body);
  const estado = req.body.estado;
  const id_pedido = req.params.id_pedido;
  sequelize
    .query("UPDATE pedidos SET estado = ? WHERE id_pedido = ?", {
      replacements: [estado, id_pedido],
    })
    .then(function (resultados) {
      if (resultados[0].affectedRows > 0)
        res.json({ message: "Pedido actualizado con éxito" });
      else res.status(404).json({ error: "El estado no fue actualizado" });
    });
};
