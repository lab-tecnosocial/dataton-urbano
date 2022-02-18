#cargamos un vector de caracter de todos los archivos con los que vamos a trabajar
library(tidyverse)
library(haven)
library(purrr)

#importamos datos

## 2016
## importamos datos de texto
import_2016 <- list.files("encuesta-hogares/2016/2016_spss", full.names = T)
nombres_2016 <- paste0(import_2016, ".csv")

## importamos datasets
datos_2016 <- lapply(import_2016, read_sav)
datasets_2016 <- lapply(datos_2016, as_factor)

#nota: funciona para todos los datos menos persona, al parecer tiene un bug esos datasets. Analizar con cuidado
#exportamos de forma correcta
for (i in seq(datasets_2016)) {
  for (j in seq(nombres_2016)) {
    write.csv(datasets_2016[[i]], file = nombres_2016[[j]]) 
  }
}

## 2017
## importamos datos de texto
import_2017 <- list.files("encuesta-hogares/2017/2017_spss", full.names = T)
nombres_2017 <- paste0(import_2017, ".csv")

## importamos datasets
datos_2017 <- lapply(import_2017, read_sav)
datasets_2017 <- lapply(datos_2017, as_factor)

#nota: funciona para todos los datos menos persona, al parecer tiene un bug esos datasets. Analizar con cuidado
#exportamos de forma correcta
for (i in seq(datasets_2017)) {
  for (j in seq(nombres_2017)) {
    write.csv(datasets_2017[[i]], file = nombres_2017[[j]]) 
  }
}

## 2018
## importamos datos de texto
import_2018 <- list.files("encuesta-hogares/2018/2018_spss", full.names = T)
nombres_2018 <- paste0(import_2018, ".csv")

## importamos datasets
datos_2018 <- lapply(import_2018, read_sav)
datasets_2018 <- lapply(datos_2018, as_factor)

#nota: funciona para todos los datos menos persona, al parecer tiene un bug esos datasets. Analizar con cuidado
#exportamos de forma correcta
for (i in seq(datasets_2018)) {
  for (j in seq(nombres_2018)) {
    write.csv(datasets_2018[[i]], file = nombres_2018[[j]]) 
  }
}

## 2020
## importamos datos de texto
import_2020 <- list.files("encuesta-hogares/2020/2020_spss", full.names = T)
nombres_2020 <- paste0(import_2020, ".csv")

## importamos datasets
datos_2020 <- lapply(import_2020, read_sav)
datasets_2020 <- lapply(datos_2020, as_factor)

#nota: funciona para todos los datos menos persona, al parecer tiene un bug esos datasets. Analizar con cuidado
#exportamos de forma correcta
for (i in seq(datasets_2020)) {
  for (j in seq(nombres_2020)) {
    write.csv(datasets_2020[[i]], file = nombres_2020[[j]]) 
  }
}
