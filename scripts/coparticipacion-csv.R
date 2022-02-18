#paquetes
library(tidyverse)
library(readxl)


#coparticipacion tributaria
##cargamos nombres de hojas
sheets_nombres <- excel_sheets("coparticipacion-tributaria/Coparticipaci¢n Tributaria.xlsx")

## cargamos datos
datasets <- lapply(sheets_nombres, function(x) read_excel(path = "coparticipacion-tributaria/Coparticipaci¢n Tributaria.xlsx", sheet = x))

## exportar
exportar_path <- paste0("coparticipacion-tributaria/csv", sheets_nombres, ".csv")

for (i in seq(datasets)) {
  for (j in seq(exportar_path)) {
    write.csv(datasets[[i]], file = exportar_path[[i]]) 
  }
}