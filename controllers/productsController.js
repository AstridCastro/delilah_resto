const sequelize = require("../mysql");

exports.getProducts = (req, res) => {
    sequelize.query("SELECT * FROM productos", { type: sequelize.QueryTypes.SELECT })
    .then(function (resultados) {
        console.log(resultados);
        res.json(resultados);
    });
};

exports.getProductsId = (req, res) => {
    const id_producto = req.params.id_producto;
    sequelize.query('SELECT * FROM productos WHERE id_producto = ?', { replacements: [id_producto], type: sequelize.QueryTypes.SELECT })
    .then(function (resultados) {
        console.log(resultados);
        res.json(resultados[0]);
    });
};

exports.postProducts = (req,res)=>{
    console.log(req.body);
    const nombre_plato = req.body.nombre_plato;
    const precio = req.body.precio;

    sequelize.query('INSERT INTO productos (nombre_plato, precio) VALUES (?,?)',
    {replacements: [nombre_plato, precio]})
    .then(function(resultados){
        console.log(resultados);
        const nuevo_producto = {
            id_producto:resultados[0],
            nombre_plato,
            precio
        }
        res.json(nuevo_producto)
    }).catch(err => res.json({error: err}));
};

exports.deleteProducts = (req, res) => {
    const id_producto = req.params.id_producto;
    sequelize.query('DELETE FROM productos WHERE id_producto = ?', { replacements: [id_producto]})
    .then(function (resultados) {
        console.log("Results", resultados);
        res.status(201).send("Producto borrado con éxito");
    });
};

exports.updateProducts = (req,res) => {
    console.log(req.body);
    const nombre_plato = req.body.nombre_plato;
    const precio = req.body.precio;
    const id_producto = req.params.id_producto;
    sequelize.query('UPDATE productos SET nombre_plato = ?, precio= ? WHERE id_producto = ?', { replacements: [nombre_plato, precio, id_producto]})
    .then(function (resultados) {
        console.log(resultados);
        res.send("Producto actualizado con éxito");
    });
};