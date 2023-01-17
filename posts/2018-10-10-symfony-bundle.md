---
categories:
  - PHP
  - Symfony

tags:
  - bundle
  - proyecto distribuible
  - GitHub
  - Packagist
  - Symfony
  - buenas prácticas
  - nombre
  - README.md
  - LICENSE
  - Resources/docs/index.rst
  - programación
  - desarrollo web
  - programadores
  - plataforma de gestión de versiones online

date: 2018-10-10
isDraft: false
title: Publicando un bundle para symfony!
description: "Aprende cómo publicar un proyecto distribuible en GitHub y
Packagist siguiendo las buenas prácticas de Symfony. Conoce los detalles
importantes a tener en cuenta al momento de crear bundles, como el nombre,
README.md, LICENSE y Resources/docs/index.rst."
---

Recientemente, me he encontrado con que debía crear un bundle especifico en mi
trabajo, el problema radico en que el bundle debía ser lo suficientemente
genérico como para ser capaz de adaptarse a cualquiera de los diferentes
proyectos en los que trabaja la compañía. Fue entonces cuando decidí producir mi
primer bundle distribuible.

Si en algún momento han tenido la oportunidad de registrar un bundle
en [packagist](https://packagist.org/) sabrán que la primera vez puede no ser
sencillo entender la metodología que se usa para registrar los bundles o
cualquier proyecto.

Es por eso que decido explicar como publicar un proyecto distribuible. Es lógico
que nuestro proyecto tiene que estar almacenado en internet la comunidad de
programadores utliza por defecto [GitHub](https://github.com/), de cierta forma
es como el facebook para programadores. Sin embargo, también puedes hostear tu
bundle en cualquier plataforma de gestion de versiones online.

### Buenas Practicas

En
la [documentacion oficial de symfony](https://symfony.com/doc/current/bundles/best_practices.html)
nos muestra unas recomendaciones para tener en cuenta al momento de crear
bundles que pretendemos distribuir, a continuación mostraré un poco de lo que
nos habla symfony que debemos tener en cuenta para estos casos, sin embargo,
puedes sentirte libre en ir directamente a la documentación y ampliar un poco la
información que aquí explico.

- *Nombre*: para el nombre del bundle no es ningún secreto que debemos
  terminarlo con el sufijo ‘Bundle’, además de eso debe ser camelCase,
  alfanumérico y en caso de contener espacios, estos deben ser reemplazados por
  guiones bajos “_”.

- *README.md*: este archivo es obligatorio, y puede contener ya sea la
  información de la instalación o simplemente un preámbulo de que es el bundle.

- *LICENSE*: pese a que la documentación de symfony obliga a utilizarlo, me he
  encontrado con proyectos que no tienen este archivo. No obstante yo recomiendo
  usarlo si planeas convertirte en un “entrenador pokemon”, es decir si planeas
  crear una imagen pública y que diferentes personas usen tu bundle, ya que este
  archivo estamos diciendo que pueden y que no pueden hacer otras personas con
  él. La licencia más común que podemos encontrar es “**MIT**” que básicamente
  dice que hemos hecho un proyecto, pero que dejamos que otras personas hagan
  cualquier cosa con él. Podemos encontrar más información acerca de los tipos
  de licencias en [choosealicense.com](http://choosealicense.com/).

- *Resources/docs/index.rst*: este archivo debe estar en esta ruta y básicamente
  lo que tiene es la documentación oficial del bundle, del mismo modo cualquier
  archivo de documentación debería ir en este directorio.

### Composer.json

Posiblemente, este archivo ha sido el que más trabajo me ha dado en comprender,
y luego de muchos intentos, encontre lo que para mí fue la manera más sencilla
de crear este archivo. Lo primero que debemos hacer es abrir una consola y
dentro navegamos hasta nuestro proyecto para poder correr el comando composer
init.

```bash
$ cd path/to/your/bundle composer init
```

Este comando nos mostrará un asistente para la creación de nuestro archivo
***composer.json***, luego de terminar con el asistente solo nos queda un paso
más antes de poder continuar, y es agregar el atributo autoload a nuestro
archivo generado.

El sitio [php-fig.org](http://www.php-fig.org/psr/psr-4/) nos define el psr-4 de
la siguiente manera:

> Este PSR describe una especificación para las clases de carga automática desde
> las rutas de archivo. Es completamente interoperable y puede utilizarse además
> de cualquier otra especificación de autoloading, incluyendo PSR-0. Este PSR
> también describe dónde colocar los archivos que se cargarán automáticamente de
> acuerdo con la especificación.

En otras palabras lo que hace es decir como se llaman los archivos que va a
descargar y donde los debe colocar.

```json
{
  "autoload": {
    "psr-4": {
      "" : "<path_in_path>"
    }
  }
}
```

En la práctica, el valor de path será el directorio en donde se instalara
nuestro bundle dentro de vendor, y el valor de path_in_path será el directorio
dentro de path.

Ya con esto claro podremos pasar a nuestro último paso.

### Packagist

Este es el último paso y no es para nada complejo, lo primero que debemos hacer
es crear una cuenta en [packagist.org](https://packagist.org/), una vez
ingresemos le damos al botón de submit y pegamos la url de nuestro repositorio
en GitHub.

En este momento nuestro repositorio ya está listo para ser descargado por el
mundo entero, sin embargo, las actualizaciones automáticas no están habilitadas,
esto quiere decir que cada vez que hagamos un cambio en nuestro repositorio
tendremos que ir a nuestra cuenta de packagist.org para actualizarlo. Por suerte
existe un modo de automatizar esto, lo primero que debemos hacer es ir a nuestro
la configuración de nuestro repositorio y en el área de "*Integraciones y
servicios*" haremos clic en "*agregar servicio*"

Cuando le damos clic en agregar servicio escribimos "*Packagist*" y le damos
enviar, ahora lo único que nos queda es agregar el nombre de usuario y token de
nuestro perfil de Packagist y listo! Ya tendremos un bundle distribuido y
automatizado para las actualizaciones.

Antes de terminar quiero decir que esta fue la forma como me funciono, sin
embargo, se debe tener en cuenta que podrían existir mejores formas para
hacerlo.
