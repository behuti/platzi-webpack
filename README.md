# Webpack

Hola extrañ@ 👋👤, soy Eduardo Henao, y este es un repositorio con mis apuntes sobre el recorrido del curso de webpack de Platzi, espero que sea de ayuda, los commits están ordenados por capítulos, te invito a que vayas desde el capítulo inicial ya que al final solo vas a ver finalizado el proyecto, y la idea general es que puedas ver y analizar cada paso del proceso para entender cómo se construyó y para qué sirve cada variante de la configuración de Webpack. Enjoy 🤘🤘🤘

## Créditos y menciones

- [Platzi](https://platzi.com/home "Link a platzi") - Curso de Webpack
- [Oscar Barajas Tavares](https://github.com/gndx/js-portfolio "Proyecto js-Portfolio") - Repositorio del profesor Oscar Barajas, el cual fue utilizado para hacer un proyecto práctico y modularizar sus archivos con Webpack.

## Qué es Webpack?

Webpack es un paquete de módulos estáticos para aplicaciones de JS modernas

**Loader** Te permite hacer un bundle de cualquier recurso estático más allá de JavaScript

**Plugins** Extienden recursos para añadir configuraciones y particularidades de recursos externos

## Apuntes 📋📋

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

## Configuración del proyecto 🔧🔧🔧

1. Inicializar con Git el proyecto en la carpeta deseada con `git init`
2. Inicializar npm con `npm init`
3. Abrir con Visual Studio Code con `code . -r`
4. Crear la carpeta src, el source, donde va a vivir nuestro código.
5. Dentro de src, crear el archivo **index.js**
6. Instalar webpack y webpack-cli (para poder trabajar con comandos en la terminal) en el proyecto como dependencias de desarrollo con `npm install webpack webpack-cli -D`
7. Al no tener webpack instalado de forma global, hay que ejecutar el comando `npx webpack`, el cual va a identificar nuestro archivo **index.js** o todos los archivos javascript y va a preparar todo nuestro prouyecto.
   ❗❗❗Esto compilará nuestro proyecto y crea la carpeta dist de forma automática al no tener un archivo de configuración.
8. `npx webpack --mode development` corre webpack en modo desarrollo, la cual al compilar activa una vista con mucho más detalles sobre lo que se compila.
9. `npx webpack --mode production` optimiza todo el código al compilarlo.
10. Dentro de la carpeta **src** creamos otra carpeta llamada **utils**, la cual va a contener el arhivo **sum.js** el cual contiene una función de suma y se exporta la función y luego es importada y ejecutada desde index.js, al compilarla dependiendo del modo el archivo **main.js** contendrá o una información detallada de webpack (development) o un autoejecutable minimizado y optimizado (producción).

## Recursos

1. [JS-Portfolio](https://github.com/gndx/js-portfolio "Repositorio del proyecto de portafolio que genera datos random"). **Nota:** En el curso se clona directamente desde el repo, pero yo he bajado el .zip para luego incluirlo manualmente dentro del proyecto.

## Instrucciones Capítulo 4

1. Instalar Webpack como en el módulo visto anterior de configuración del proyecto y correr en modo productivo.

## Configuración Webpack.config.js

En la raíz del proyecto creamos el archivo **webpack.config.js**, acá vivirán todas las configuraciones referentes a la compilación.

## Compilación con archivo de configuración

Una vez añadido el archivo de la configuración el proyecto se puede compilar con el siguiente comando `npx webpack --mode production --config [archivo de configuración]`

Para hacer más amigable la ejecución del script podemos añadirlo como un script en el archivo **package.json** en la sección de scripts del siguiente modo:

```
{
  ...
  "scripts": {
    ...
    "build": "webpack --mode production",
    "dev": "webpack --mode development",
  }
}
```

### Path

Es un elemento ya disponible en **node** por lo tanto no necesita instalación de otra dependencia,

```
const path = require('path')
```

### Modulo a exportar

Vamos a crear un módulo que vamos a exportar con un objeto con la configuración deseada.

```
module.exports = {
  // Aquí van a vivir todas las configuraciones
}
```

### Entry

Nos va a permitir decir cual es el punto de entrada de nuestra aplicación. Esto es importante ya que debemos decir cual es el elemento inicial de nuestra aplicación.

```
{
  ...
  entry: '.src/index.js'
}
```

### Output

Hacia donde vamos a enviar lo que prepara webpack, se declara en forma de objeto y contiene los siguientes elementos:

- path: Dirección en la cual va a ser guardado el bundle de webpack.

**path.resolve()** Nos permite saber en qué directorio está ubicado nuestro proyecto de forma relativa, esto evita problemas de especificación de directorios tanto local, como remotamente. Como segundo argumento se pone el nombre de la carpeta de la salida, **dist** es el estándar.

- filename: Nombre del archivo del bundle, puede ser main.js o bundle.js, o ya de una forma más avanzada puede ser un hash.

```
{
  ...
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
}
```

### Resolve

Sirve para decirle a Webpack con qué estenciones vamos a trabajar.

```
{
  ...
  resolve: {
    extensions: ['.js']
  }
}
```

## Loaders

### Babel Loader

Prepara el código Js para todos los navegadores. Para añadirlo debemos usar el comando `npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D`.

**Nota:** El plugin _@babel/plugin-transform-runtime_ nos permite transpilar el código que usa asincronismo.

Para pasar la configuración de babel, debemos crear el archivo **.babelrc**, cabe aclarar que dicho archivo en los sistemas de ficheros UNIX este es oculto por defecto, por lo que puede que cuando inspecciones algún proyecto que contiene babel no lo veas debido a lo explicado anteriormente.
Dentro de la configuración se crea un objeto donde se añaden las configuraciones de los presets y los plugins.

```
{
  "presets": [
    "@babel/preset-env",
    ...
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    ...
  ]
}
```

Luego de haber creado la configuración se debe añadir ese módulo a la configuración de webpack en el archivo **webpack.config.js** dentro de la propiedad _module_ que contiene una serie de elementos, como _rules_ que especifica las reglas de cómo vamos a trabajar con los diferentes tipos de archivos dentro del proyecto. _test_ nos permite saber qué tipo de extensiones vamos a trabajar y funciona con expresiones regulares. _exclude_ excluye los archivos especificados. _use_ especifica qué loader vamos a usar.

```
{
  ...
  module: {
    rules: [
      {
        test: /\.m?.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
}
```

## HTML en Webpack

Debemos instalar el plugin de html con el siguiente comando `npm install html-webpack-plugin -D` y luego añadirlo en el webpack.config.js

Luego importamos la dependencia en el archivo de la siguiente manera:

```
const HTMLWebpackPlugin = require('html-webpack-plugin')

```

Y después añadimos la sección de plugins:

```
{
  ...
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: '/public/index.html',
      filename: './index.html'
    })
  ]
}
```