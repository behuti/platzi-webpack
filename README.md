# Webpack
Hola extrañ@ 👋👤, soy Eduardo Henao, y este es un repositorio con mis apuntes sobre el recorrido del curso de webpack de Platzi, espero que sea de ayuda, los commits están ordenados por capítulos, te invito a que vayas desde el capítulo inicial ya que al final solo vas a ver finalizado el proyecto, y la idea general es que puedas ver y analizar cada paso del proceso para entender cómo se construyó y para qué sirve cada variante de la configuración de Webpack. Enjoy 🤘🤘🤘

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

### Capítulo 4
1. Instalar Webpack como en el módulo visto anterior de configuración del proyecto y correr en modo productivo.