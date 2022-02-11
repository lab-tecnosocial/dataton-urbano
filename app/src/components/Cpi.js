import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import BackupTableIcon from '@mui/icons-material/BackupTable';

export default function Cpi() {
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
                        <Typography variant='h5' gutterBottom>Indice de Prosperidad urbana (CPI)</Typography>
                        <Typography variant="body1" gutterBottom>Descripción...</Typography>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item sx={6}>
                                <Button variant="outlined" onClick={() => window.open('https://github.com/lab-tecnosocial/dataton-urbano/raw/main/datos/cpi/BASE%20DE%20DATOS%20CPI.xlsx')}endIcon={<BackupTableIcon />}>
                                    Descargar datos (xlsx)
                                </Button>
                            </Grid>
                            <Grid item sx={6}>
                                <Button variant="outlined" endIcon={<BackupTableIcon />}>
                                    Descargar datos (csv)
                                </Button>
                            </Grid>
                        </Grid>



                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );

}
