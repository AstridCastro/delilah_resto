# Delilah_resto

## Instalación

1. Ejecutar Delilah_resto.sql en MySQL.
2. Modificar las credenciales de la base de datos en el archivo mysql.js

    ```javascript
    const sequelize = new Sequelize ('mysql://root:astrid123@127.0.0.1:3306/restaurante');
    ```
3. Ejecutar los siguientes comandos en la terminal:
    ```bash
    npm i
    npm start
    ```
5. Utilizar la colección de postman delilah_resto.postman_collection.json para realizar las pruebas.