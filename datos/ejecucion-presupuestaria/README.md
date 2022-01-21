# ejecucion-presupuestaria

## Descripción

Datos sobre la ejecución presupuestaria de distintos entes municipales en Bolivia. Contiene 1 archivo de excel y 21 archivos csv que cubren la ejecución presupuestaria de distintos municipios, entre el año 2001 a 2021.
## Etiquetas

Economía, Presupuestos municipales, Gastos públicos
## Cobertura

| Espacial | Temporal                 |
| -------- | ------------------------ |
| Bolivia  | Del 2001 al 2021 |
## Fuente

[Ministerio de economía y finanzas públicas] (https://www.economiayfinanzas.gob.bo/)
## Producción

Los datos provienen de la propia elaboración del Ministerio de Economía y Finanzas Públicas. 
## Diccionario
| Campo       | Tipo         | Descripción                                                              |
| ----------- | ------------ | ------------------------------------------------------------------------ |
| Ent | Integer | id de cada registro presupuestario                                            |
| Entidad     | String       | Nombre de la entidad que ejecutó presupuesto              |
| Fecha de Datos  | Date      | Fecha en la que se registró el presupuesto      |
| Ppto. Aprobado  |   Integer    | Presupuesto aprobado (en bolivianos)        |
| Crédito Vigente  | Integer      | Crédito vigente (en bolivianos)                        |
| Comprometido       | Integer      | Cantidad comprometida (en bolivianos)                                             |
| Devengado     | Integer      | Cantidad devengada (en bolivianos) |
| Pagado     | Integer      | Cantidad pagada (en bolivianos)|
| Saldo por pagar     | Integer      | Saldo por pagar (en Bolivianos)|
| Deuda flotante     | Integer      | Deuda flotante (en bolivianos)|