# velocidad-internet-bo

## Descripción

Datos sobre velocidad a Internet en Bolivia. Velocidades de conexiones fijas y móviles.

## Etiquetas

Internet, Velocidad de Internet, Internet fijo, Internet móvil, Bolivia

## Cobertura

| Espacial | Temporal                 |
| -------- | ------------------------ |
| Bolivia  | Primer trimestre de 2021 |

## Fuente

[Ookla](https://github.com/teamookla/ookla-open-data)

## Producción

Los datos provienen de las pruebas de velocidad que hacen los propios usuarios de Internet con la herramienta [SpeedTest](https://www.speedtest.net/). Los datos están agregados por teselsa (*tiles*) que miden aproximadamente 610.8x610.8 metros al Ecuador. Usa [WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)

## Diccionario


| Campo       | Tipo         | Descripción                                                              |
| ----------- | ------------ | ------------------------------------------------------------------------ |
| coordinates | Multypoligon | Coordenadas espaciales                                                   |
| quadkey     | String       | Identificador de las teselas                                             |
| avg_d_kbps  | Integer      | Descarga promedio en la tesela representada en kilobits por segundo      |
| avg_u_kbps  | Integer      | Subida promedio en la tesela representada en kilobits por segundo        |
| avg_lat_ms  | Integer      | Latencia promedio de la prueba en milisegundos                           |
| tests       | Integer      | Número de tests en la tesela                                             |
| devices     | Integer      | Número de dispositivos únicos que contribuyeron a los tests de la tesela |
