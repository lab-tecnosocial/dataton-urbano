import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HouseIcon from '@mui/icons-material/House';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Link } from 'react-router-dom';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DirectionsIcon from '@mui/icons-material/Directions';

export const mainListItems = (
  <div>
     <ListItem button component={Link} to="/cpi">
      <ListItemIcon>
        <LocationCityIcon />
      </ListItemIcon>
      <ListItemText primary="Indice de Prosperidad Urbana" />
    </ListItem>

    <ListItem button component={Link} to="/encuesta-hogares">
      <ListItemIcon>
        <HouseIcon />
      </ListItemIcon>
      <ListItemText primary="Encuesta de hogares" />
    </ListItem>

    <ListItem button component={Link} to="/ejecucion-presupuestaria">
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Ejecución presupuestaria" />
    </ListItem>

    <ListItem button component={Link} to="/coparticipacion-tributaria">
      <ListItemIcon>
        <PointOfSaleIcon />
      </ListItemIcon>
      <ListItemText primary="Coparticipación tributaria" />
    </ListItem>

    <ListItem button component={Link} to="/velocidad-internet">
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="Velocidad de Internet" />
    </ListItem>

    <ListItem button component={Link} to="/movilidad">
      <ListItemIcon>
        <DirectionsIcon />
      </ListItemIcon>
      <ListItemText primary="Movilidad" />
    </ListItem>

  </div>
);
