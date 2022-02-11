import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';


export default function EncuestaHogares() {
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
                        <Typography variant='h5'>Encuesta de hogares</Typography>
                        <Typography variant='body1'>Descripción...</Typography>
                        <List>
                            <ListItem disablePadding onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/tree/main/datos/encuesta-hogares/2016')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="2016" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/tree/main/datos/encuesta-hogares/2017')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="2017" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/tree/main/datos/encuesta-hogares/2018')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="2018" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/tree/main/datos/encuesta-hogares/2019')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="2019" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/tree/main/datos/encuesta-hogares/2020')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="2020" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );

}
