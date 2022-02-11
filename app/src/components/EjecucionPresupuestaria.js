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



export default function EjecucionPresupuestaria() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Typography variant='h5'>Ejecución presupuestaria</Typography>
                        <Typography variant="body1" gutterBottom>Descripción...</Typography>

                        <List>
                            <ListItem onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/raw/main/datos/ejecucion-presupuestaria/Ejecucion%20Presupuestaria.xlsx')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <BackupTableIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Descargar datos (xlsx)" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/tree/main/datos/ejecucion-presupuestaria/csv')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Descargar datos (csv)" />
                                </ListItemButton>
                            </ListItem>
                        </List>

                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );

}
