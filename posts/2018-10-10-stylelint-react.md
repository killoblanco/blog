---
categories:
  - React
  - CSS

date: 2018-10-10
description: "Aprende a configurar Stylelint en tu aplicación de ReactJS para
detectar conflictos en tus hojas de estilos y solucionarlos de manera eficiente.
Siguiendo los pasos detallados en este post, podrás mejorar tu proyecto y
optimizar tu trabajo."

isDraft: false
tags:
  - Stylelint
  - JS
  - React
  - configuración
  - hojas de estilos
  - linter
  - conflictos
  - desarrollo web
  - proyectos de React
  - herramientas de desarrollo
  - estilos
  - observador de estilos
  - webpack
  - plugin
  - reglas
  - configuración estandar
  - estilos compartidos
  - estilos de código
  - estilos de programación
  - estilos de programador
  - estilos de desarrollador
  - estilos de código limpio
  - estilos de código estandar

title: Cómo configurar Stylelint en una aplicación de ReactJS
---

Hola, en este post estaremos hablando de como hacer las configuraciones básicas
***Stylelint*** dentro de una aplicación de React JS para que en caso de tener
conflictos dentro de nuestras hojas de estilos la aplicación sea capaz de
mostrarnos donde y cuál es el conflicto.

Lo primero que debemos hacer es crear una aplicación de React JS en caso de no
tener alguna y luego la vamos a eyectar para poder asi empezar con las
configuraciones necesarias en nuestro proyecto.

```bash
# Creamos la aplicacion de react
~ $ npx create-react-app <app_name>

# Una vez dentro del directorio que nos ha generado vamos a
# ejectar la aplicación, cuando prengunte si realmente
# queremos ejectar la aplicación le daremos 'y'
<app_name> $ yarn eject
```

Muy bien, ahora tenemos una aplicación de React JS creada y eyectada
procederemos a instalar las dependencias necesarias para que nuestro observador
de estilos trabaje adecuadamente.

```bash
# Instalamos stylelint junto con el plugin para webpack
<app_name> $ yarn add --dev stylelint stylelint-webpack-plugin
```

Ahora que tenemos ***Stylelint*** instalado podemos hacer la configuración
básica. Dentro de nuestra estructura de directorios tendremos una carpeta que
se llama *config/* la cual dentro contiene nuestro archivo de configuración de
webpack.

Con nuestro editor de código modificamos el archivo *webpack.config.dev.js* para
que se vea como el siguiente:

```javascript
'use strict';

...

const StyleLintPlugin = require('stylelint-webpack-plugin');

...

module.exports = {
  ...

  plugins: [
    ...

    // Style Linter Plugin
    new StyleLintPlugin({
        configFile: '.stylelintrc',
        context: 'src',
        files: '**/*.css',
        failOnError: false,
        quiet: false,
    }),
  ],

  ...

}
```

Para saber más acerca de las opciones que recibe ***StyleLintPlugin*** puede
revisar
su [documentación oficial](https://github.com/JaKXz/stylelint-webpack-plugin#options).

Con estos pasos hechos hasta aquí solo hace falta definir nuestras reglas para
nuestro linter, en este caso solo extenderemos las reglas de la configuración
estandar para compartir estilos. Así que, instalemos *stylelint-config-standard*
y agreguémoslo a nuestro proyecto.

```bash
<app_name> $ yarn add --dev stylelint-config-standard
```

Por último creamos un archivo con el nombre *.stylelintrc* en la raíz de nuestro
proyecto y le agregamos las siguientes líneas.

```json
// .stylelintrc
{
  "extends": "stylelint-config-standard"
}
```

Puedes leer más sobre las reglas de ***Stylelint*** desde
su [web oficial](https://stylelint.io/user-guide/rules/), asi como puedes
revisar la documentación de la configuración
estandar [aquí](https://github.com/stylelint/stylelint-config-standard).
