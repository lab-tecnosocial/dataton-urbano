import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, ListItem } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import BackupTableIcon from '@mui/icons-material/BackupTable';



export default function VelocidadInternet() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 400,
                        }}
                    >
                        <Typography variant='h5'>Velocidad de Internet</Typography>
                        <Typography variant="body1">Descripción...</Typography>
                        <List>
                            <ListItem onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/raw/main/datos/velocidad-internet-bo/fijo-T1-2021.geojson')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <BackupTableIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Internet fijo (geojson)" />
                                </ListItemButton>
                                
                            </ListItem>
                            <ListItem onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/raw/main/datos/velocidad-internet-bo/movil-T1-2021.geojson')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <BackupTableIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Internet móvil (geojson)" />
                                </ListItemButton>
                                
                            </ListItem>
                            <ListItem onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/tree/main/datos/velocidad-internet-bo/fijo-T1-2021')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Internet fijo (shapefile)" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/tree/main/datos/velocidad-internet-bo/movil-T1-2021')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Internet móvil (shapefile)" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );

}
