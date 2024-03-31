---
title:    Documentación de un proyecto Django con Sphinx
date:     sáb 30 mar 2024 00:50:55
layout:   post
---

<!-- Primera entrada del nuevo blog finalmente decidi no tomarme tan -->
<!-- encerio todo lo relacionado con el diseño y gestion del contenido -->
<!-- antes de tener algo de interes que publicar. Ahora si vamos al asunto -->
<!-- este semestre finalmente empece a hacer mi servicio social profecional  -->
<!-- en la universidad. -->


## Instalar Sphinx 
Sphinx se instala de manera similar a cualquier paquete de python
utilizando `pip install Sphinx` y podremos empezar a utilizarlo,
personalmente recomiendo agregarlo a `requirements.txt`, para eso
simplemente agregamos la siguiente linea al archivo:

```
Sphinx==7.2.6
```


## Directorio `docs/`
Una vez instalado el proyecto podemos empezar a crear el directorio
donde guardaremos la documentación, lo mas común es crear un
directorio llamado `docs/`, así que creamos el directorio:

```sh
cd /path/to/project
mkdir docs
cd docs
```


## Inicializar Sphinx
Ya una vez creado el directorio inicializamos la documentación, para
esto nos movemos a el directorio `/docs` y utilizaremos
`sphinx-quickstart`. Al iniciar el comando sphinx hará algunas
preguntas, No hay que preocuparnos ya que podremos actualizarlo de
manera fácil en `config.py`: 

```
> Separate source and build directories (y/n): (ENTER)
> Name prefix for templates and static dir [_]: (ENTER)
> Project name: Nombre del proyecto
> Author name(s): Nombre del autor
> Project release []: version del proyecto
> Project language [en]: es 
```

por ultimo volvemos a el folder raiz de nuestro proyecto y utilizamos
`sphinx-apidoc` para generar los documentos
[reST](https://es.wikipedia.org/wiki/ReStructuredText) (mas adelante
volveremos a ellos): 

```sh
cd ..
sphinx-apidoc -o docs .
```

## Configuración
Regresamos al directorio `docs` donde debería haber un archivo llamado
`conf.py` aquí se encuentra la configuración de nuestro proyecto, aquí
podemos actualizar la información que pusimos en quickstart, 

ahora hacemos que sphinx tenga acceso a nuestros modelos, para eso
modificamos el `conf.py` agregando las siguientes lineas

```py
import os
import sys
import django

sys.path.insert(0, os.path.abspath('..'))
os.environ['DJANGO_SETTINGS_MODULE'] = 'prestamos.settings'
django.setup()

# -- Project information -----------------------------------------------------
    ...
# -- General configuration ---------------------------------------------------

# agregamos tambien los plugins de autodoc

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode'
]

```

## Documentación Automatizada
Una vez con nuestra documentación configurada podemos generar los
documentos en html utilizando `make html` en el directorio `docs`


## Principios Básicos

## Personalización


<!-- comentarios -->
<script src="https://utteranc.es/client.js"
        repo="Galindo-lab/galindo-lab"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
