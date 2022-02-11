import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Main() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" gutterBottom>
                            Contexto
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Desde el año 2019 se ha recolectado y generado información a nivel urbano en el marco de la formulación de la PNDIC.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Existe información estadística y geográfica generada por diferentes organizaciones, que puede ser muy útil para caracterizar las condiciones del desarrollo urbano.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" gutterBottom>
                            Objetivos
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Promover el uso masivo de datos a escala urbana.
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Incentivar la producción de nueva información  y análisis a escala urbana                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Insumo para la planificación urbana.                                </ListItemText>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" gutterBottom>
                            Categorias
                        </Typography>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontWeight: 'bold' }}>Visualización</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Presentar alternativas de representación visual de información sobre las condiciones de vida urbana.
                                </Typography>
                                <ul>
                                    <li>Índice de ciudades prósperas [Matriz CPI]</li>
                                    <li>Finanzas Municipales​ [Presupuestos municipales]</li>
                                    <li>Movilidad urbana (Google – Facebook)​ [movilidad FB, GO]</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                id="panel2a-header"
                            >
                                <Typography sx={{ fontWeight: 'bold' }}>Análisis e inferencia</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                </Typography>
                                <ul>
                                    <li>Características de la inequidad socio espacial​ [Encuestas de hogares, Censo 2001, 2012, Velocidad Internet, Conflictos del suelo urbano]</li>
                                    <li>Cálculo de indicadores de desarrollo urbano​ [todas las bases]
                                        <ul>
                                            <li>Nuevos-​Propuestas​</li>
                                            <li>CPI - UMF​</li>
                                        </ul>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontWeight: 'bold' }}>Proyecciones</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li>¿Qué perspectivas se tienen respecto al crecimiento de la población y de la mancha urbana en las ciudades de Bolivia?</li>
                                    <li>¿Qué perspectivas se tienen en cuanto a finanzas municipales, desarrollo de infraestructura y gestión de plusvalías?</li>
                                    <li>¿Qué perspectivas se tienen en cuanto a principales ramas de actividad económica, estructura ocupacional, densidad económica en las ciudades? </li>
                                    <li>¿Qué perspectivas se tienen en cuanto a cobertura de abastecimiento de servicios básicos (agua, saneamiento, electricidad, combustible para cocinar, internet, transporte)… en las ciudades?</li>
                                    <li>¿Qué perspectivas se tienen respecto a igualdad, equidad, inclusión social y sostenibilidad ambiental?</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );

}
