#paquetes
library(tidyverse)
library(readxl)

# ejecucion presupuestaria
##cargamos nombres de hojas
sheets_names <- excel_sheets("ejecucion-presupuestaria/Ejecucion Presupuestaria.xlsx")

## cargamos datos
datos <- lapply(sheets_names, function(x) read_excel(path = "ejecucion-presupuestaria/Ejecucion Presupuestaria.xlsx", sheet = x))

## exportar
export_path <- paste0("ejecucion-presupuestaria/csv", sheets_names, ".csv")

for (i in seq(datos)) {
  for (j in seq(export_path)) {
    write.csv(datos[[i]], file = export_path[[i]]) 
  }
}
