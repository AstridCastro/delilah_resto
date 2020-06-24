-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 24-06-2020 a las 01:32:09
-- Versión del servidor: 8.0.20
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE SCHEMA `restaurante` ;
USE  `restaurante` ;


CREATE TABLE `pedidos` (
  `estado` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hora` time NOT NULL,
  `id_pedido` int NOT NULL,
  `metodo_de_pago` varchar(60) NOT NULL,
  `id_usuario` int NOT NULL,
  `fecha_creacion` date NOT NULL,
  `fecha_actualizacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`estado`, `hora`, `id_pedido`, `metodo_de_pago`, `id_usuario`, `fecha_creacion`, `fecha_actualizacion`) VALUES
('nuevo', '20:10:00', 1, 'efectivo', 1, '2020-05-16', '2020-05-31'),
('nuevo', '00:00:00', 2, 'tarjeta_de_credito', 1, '2020-05-06', '2020-05-31'),
('nuevo', '00:00:00', 3, 'efectivo', 2, '2020-05-16', '2020-05-31'),
('nuevo', '20:10:00', 5, 'efectivo', 2, '2020-05-16', '2020-05-31'),
('nuevo', '20:10:00', 6, 'efectivo', 1, '2020-05-16', '2020-05-31'),
('nuevo', '20:10:00', 7, 'tarjeta_de_credito', 2, '2020-05-16', '2020-06-22'),
('nuevo', '20:10:00', 8, 'efectivo', 2, '2020-05-16', '2020-05-31'),
('nuevo', '20:10:00', 9, 'efectivo', 2, '2020-05-16', '2020-05-31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_productos`
--

CREATE TABLE `pedidos_productos` (
  `id` int NOT NULL,
  `id_pedido` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `pedidos_productos`
--

INSERT INTO `pedidos_productos` (`id`, `id_pedido`, `id_producto`, `cantidad`) VALUES
(1, 1, 1, 0),
(2, 1, 2, 0),
(3, 3, 3, 0),
(4, 9, 1, 2),
(5, 9, 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int NOT NULL,
  `nombre_plato` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `precio` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_plato`, `precio`) VALUES
(1, 'Bagel de salmón', 425),
(2, 'Hamburguesa clásica', 350),
(3, 'Sandwich veggie', 310),
(4, 'Ensalada veggie', 310),
(5, 'Focaccia', 300),
(6, 'Sandwich Focaccia', 440),
(12, 'Bagel de mariscos', 600),
(16, 'Bagel de mariscos', 600),
(17, 'Bagel de mariscos', 600),
(18, 'Bagel de mariscos', 600),
(19, 'Bagel de mariscos', 600),
(20, 'Bagel de mariscos', 600);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `nombre_usuario` varchar(60) NOT NULL,
  `nombre_completo` varchar(60) NOT NULL,
  `correo_electronico` varchar(200) NOT NULL,
  `telefono` double NOT NULL,
  `direccion_de_envio` varchar(200) NOT NULL,
  `contrasena` varchar(200) NOT NULL,
  `rol` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'cliente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `nombre_completo`, `correo_electronico`, `telefono`, `direccion_de_envio`, `contrasena`, `rol`) VALUES
(1, 'Maria_Cano', 'Maria Alejandra Cano Moreno', 'mariacano@gmail.com', 3113246328, 'Carrera 30 # 45-12. Apto 402', 'lapiz123', 'cliente'),
(2, 'Camilo_Ardila', 'Camilo Andres Ardila Caro', 'camiloardila@gmail.com', 3125437621, 'Carrera 31 # 23-15. Apto 301', 'azul123', 'cliente'),
(8, 'Astrid_Castro', 'Astrid Yamile Castro Mayorga', 'astridcastro@admin.com', 3123123421, 'Padre Urbano,7', 'admin123', 'administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `pedidos_productos`
--
ALTER TABLE `pedidos_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `pedidos_productos`
--
ALTER TABLE `pedidos_productos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
