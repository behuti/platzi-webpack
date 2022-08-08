# Webpack
Curso de Webpack - Platzi

## Qué es Webpack?
Webpack es un paquete de módulos estáticos para aplicaciones de JS modernas

**Loader** Te permite hacer un bundle de cualquier recurso estático más allá de JavaScript

**Plugins** Extienden recursos para añadir configuraciones y particularidades de recursos externos

## Apuntes
- Webpack construye un gráfico de dependencias que mapea cada módulo para convertirlo en uno o más módulos
- Desde webpack 4 ya no dependemos de tener un archivo de configuración, debemos tener un punto de entrada dentro de una carpeta específica
- Archivo index.js que va a partir de ahí todos los elementos de nuestra aplicación.
- Tambien tendremos que tener un punto de salida= Dónde será creado nuestro proyecto a partir de Webpack
- Normalmente es la carpeta dist (Distribution), donde se van a añadir los elementos, sean imágenes, Js, HTML, etc.
- Tambien contamos con elementos particulares:
  - Modo de desarrollo
  - Modo de producción
- Opción para poder observar los cambios en tiempo real y poder recompilar nuestro proyecto y poder analizar cada cambio realizado.
- Modos de performance permite configurar: Configuraciones de minificación, Carpeta destino de los elementos, Habilitar modos de desarrollo local (puerto específico, cambios in "Real Time").