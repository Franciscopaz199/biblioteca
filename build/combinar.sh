#!/bin/bash

# Carpeta que contiene los archivos CSS
carpeta="../src/styles"

# Nombre del archivo de salida
archivo_salida="combinado.css"

# Obtener la lista de archivos CSS en la carpeta
archivos_css=$(find "$carpeta" -type f -name "*.css")

# Concatenar los archivos CSS en el archivo temporal
cat $archivos_css > "temp.css"

# Minificar el archivo CSS combinado utilizando cssnano
npx cssnano "temp.css"  $archivo_salida


# Eliminar el archivo temporal
rm "temp.css"

echo "Archivos CSS combinados y minificados exitosamente en $archivo_salida"
