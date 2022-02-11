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

export default function CoparticipacionTributaria() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 300,
                        }}
                    >
                        <Typography variant='h5'>Movilidad</Typography>
                        <Typography variant="body1">Descripción...</Typography>
                        <List>
                            <ListItem onClick={() => window.open('https://drive.google.com/drive/folders/1cYZJn35UogfTorf9Wv-1YC_zNldbVS7a')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Facebook Mobility" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem onClick={() => window.open('https://drive.google.com/drive/folders/1c_yFq3XZ0qBLt4yIBC4HLeuuKolLvPt4')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Facebook Population" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem onClick={() => window.open('https://drive.google.com/drive/folders/1c_wQh5chkE4p09Cwzc3WAxBmkBsuqgdr')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Google Mobility" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );

}
