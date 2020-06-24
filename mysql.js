const Sequelize = require('sequelize');
const sequelize = new Sequelize ('mysql://root:astrid123@127.0.0.1:3306/restaurante');

// sequelize.query('SELECT * FROM usuarios',
//     { type: sequelize.QueryTypes.SELECT }
// ).then(function(resultados) {
//     console.log(resultados)
// });

module.exports = sequelize;