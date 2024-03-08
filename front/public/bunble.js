/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ (() => {

eval("\r\nconst pelisContenedor = document.getElementById('pelisContenedor');\r\n\r\nfunction renderPelis(pelicula) {\r\n\r\nconst tarjetaPelicula = document.createElement(\"div\");\r\ntarjetaPelicula.classList.add(\"peliCard\");  \r\n\r\nconst tarjetaPeliculaCara = document.createElement(\"div\");\r\ntarjetaPeliculaCara.classList.add(\"peliCardCara\");\r\ntarjetaPeliculaCara.innerHTML = `\r\n<img class=\"poster\" src=\"${pelicula.poster}\" alt=\"${pelicula.title}\">\r\n`;\r\n\r\nconst tarjetaPeliculaAtras = document.createElement(\"div\");\r\ntarjetaPeliculaAtras.classList.add(\"peliCardAtras\");\r\ntarjetaPeliculaAtras.innerHTML = `\r\n     <h3 class=\"title\">${pelicula.title} (${pelicula.year})</h3>\r\n     <p class=\"infoPeli\">Dirigida por: ${pelicula.director}</p>\r\n     <p class=\"infoPeli\">Duración: ${pelicula.duration}</p>\r\n     <p class=\"infoPeli\">Género: ${pelicula.genre}</p>\r\n     <p class=\"infoPeli\">${pelicula.rate}</p>\r\n`;\r\n\r\n\r\ntarjetaPelicula.appendChild(tarjetaPeliculaCara);\r\ntarjetaPelicula.appendChild(tarjetaPeliculaAtras);  \r\npelisContenedor.appendChild(tarjetaPelicula);\r\n\r\n}\r\n\r\n\r\n$.get(`https://students-api.2.us-1.fl0.io/movies`,(data) => data.forEach(renderPelis));\r\n\r\n\r\n    \n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/index.js"]();
/******/ 	
/******/ })()
;