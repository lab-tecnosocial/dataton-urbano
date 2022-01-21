# Script para convertir formatos de datos geograficos

a_geojson() {
    ogr2ogr -f GeoJSON ${1}_ogr.geojson $1
    echo "Convertido a: ${1}.geojson"
}

a_shapefile(){
    filename=$(echo $1 | cut -f 1 -d '.')
    ogr2ogr -f 'ESRI Shapefile' $filename $1
    echo "Convertido a carpeta de shapefile: $filename"
}

